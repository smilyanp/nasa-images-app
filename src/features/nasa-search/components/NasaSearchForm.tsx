import { useState } from "react";
const NasaSearchForm = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <form>
      <label>
        <p>Search for images</p>
        <input type="text" onChange={handleChange} value={search} />
      </label>
    </form>
  );
};
export default NasaSearchForm;
