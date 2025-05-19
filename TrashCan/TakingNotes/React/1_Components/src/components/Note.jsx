import CodeExample from "./CodeExample";

export default function Note() {
  const code = `
 //Function component
function Gloria(props) {
  return (
    <div>
      <h2>Hello {props.name}!</h2>
    </div>
  );
}

//Using the component
function App() {
  return (
    <div>
      <Gloria name="Nihil" />
    </div>
  );
}`;

  return (
    <section className="max-w-[50%] w-[100%]">
      <h1>Components</h1>
      <CodeExample code={code} />
    </section>
  );
}
