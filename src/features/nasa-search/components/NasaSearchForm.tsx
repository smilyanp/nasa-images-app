import { useState } from "react";
import { NasaSearchFormProps } from "../types";

const NasaSearchForm = ({ onSubmit }: NasaSearchFormProps) => {
  const [search, setSearch] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    onSubmit(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-8">
        <label>
          <p className="sr-only">Search for images</p>
          <div className="bg-white flex items-end rounded-full shadow-xl">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              type="text"
              placeholder="Search for images"
              onChange={handleChange}
              value={search}
            />
          </div>
        </label>
      </div>
    </form>
  );
};
export default NasaSearchForm;
