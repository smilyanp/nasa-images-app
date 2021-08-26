import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, screen } from "./test/utils";
import flushAllPromises from "flush-promises";
import App from "./App";

const mockImagesSearchResponse = {
  collection: {
    version: "1.0",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/KSC-07pd0008/collection.json",
        links: [
          {
            href: "https://images-assets.nasa.gov/image/KSC-07pd0008/KSC-07pd0008~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
        data: [
          {
            title: "KSC-07pd0008",
            description:
              "Endeavour's payload bay is open for payload configuration work in Orbiter Processing Facility bay 2",
            media_type: "image",
            date_created: "2007-01-04T00:00:00Z",
            location: "Kennedy Space Center, FL",
            nasa_id: "KSC-07pd0008",
            center: "KSC",
          },
        ],
      },
    ],
    href: "http://images-api.nasa.gov/search?media_type=image&q=",
    metadata: { total_hits: 1 },
    links: [
      {
        href: "http://images-api.nasa.gov/search?media_type=image&page=2",
        rel: "next",
        prompt: "Next",
      },
    ],
  },
};
describe("App.tsx", () => {
  let axiosMock: MockAdapter;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it("should show loading if API hasn't finished returning data", async () => {
    axiosMock
      .onGet(
        `${process.env.REACT_APP_IMAGES_API_BASE_URL}/search?media_type=image&q=`
      )
      .reply(200, mockImagesSearchResponse);
    await render(<App />);

    const loadingElement = screen.getByText(/loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render image based on API data", async () => {
    axiosMock
      .onGet(
        `${process.env.REACT_APP_IMAGES_API_BASE_URL}/search?media_type=image&q=`
      )
      .reply(200, mockImagesSearchResponse);
    await render(<App />);
    await flushAllPromises();

    const imageElement = document.querySelector("img") as HTMLImageElement;
    expect(imageElement.alt).toBe("KSC-07pd0008");
    expect(imageElement.src).toBe(
      "https://images-assets.nasa.gov/image/KSC-07pd0008/KSC-07pd0008~thumb.jpg"
    );
  });
});
