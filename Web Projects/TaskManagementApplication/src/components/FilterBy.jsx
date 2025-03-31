import { useState } from "react";

export default function ExportBy({ categories, onFilterTasks }) {
  const [selectedOption, setSelectedOption] = useState("default");
  const [selectedSubOption, setselectedSubOption] = useState();

  function handleSelectedOption(e) {
    setSelectedOption(e.target.value);
    setselectedSubOption(categories.sort()[0]);
    onFilterTasks(categories.sort()[0]);
  }

  function handleSelectedSubOption(e) {
    setselectedSubOption(e.target.value);
    onFilterTasks(e.target.value);
  }

  return (
    <div>
      <select onChange={handleSelectedOption}>
        <option value="default">Default</option>
        <option value="category">Category</option>
      </select>
      {selectedOption !== "default" && (
        <select onChange={handleSelectedSubOption}>
          {categories.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}
