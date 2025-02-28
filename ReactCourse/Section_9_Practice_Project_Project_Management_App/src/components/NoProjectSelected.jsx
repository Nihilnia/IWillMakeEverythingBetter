import imgNoProject from "../assets/no-projects.png";
import ButtonAdd from "./ButtonAdd";

export default function NoProjectSelected({ handleSelectedPage }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={imgNoProject}
        alt="Select A Project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p>
        <ButtonAdd onClick={() => handleSelectedPage("NewProject")}>
          Create new project
        </ButtonAdd>
      </p>
    </div>
  );
}
