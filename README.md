# NASA Images Search Application

## Description

This is a small application that integrates with the [NASA Image and Video Library API](https://images.nasa.gov/). It allows users to **search for assets** and then **select and view an asset**.

The following wireframes show a high-level representation of the content and user flow:

![Wireframes](./wireframes.png)

## API

### Example Usage

```js
(q) => fetch(`https://images-api.nasa.gov/search?&media_type=image&q=${q}`);
```

```js
(q) => fetch(`https://images-api.nasa.gov/asset/:id`);
```

```js
(q) => fetch(`https://images-assets.nasa.gov/image/:id/metadata.json`);
```

For title and description it uses uses the `XMP:Title` & `XMP:Description` properties from the metadata endpoint.

### Docs

- https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
- https://images.nasa.gov (website)

## Installation

Clone the repository and run `npm insall`

## Running

To run the application for local development `npm start`

To build for a Production environment `npm run build`

## Testing

Tests are set up with "@testing-library/react" and a few utilities are available in the `./test/utils.tsx`.

Example tests that also handle API calls are available in `./App.test.tsx`
