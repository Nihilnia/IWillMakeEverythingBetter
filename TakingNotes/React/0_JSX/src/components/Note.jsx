import CodeExample from "./CodeExample";

export default function Note() {
  const code = `
  function Gloria(name) {
    return (
      <div>
        <h2>Hello {name}!</h2>
      </div>
    );
  }`;

  return (
    <section className="max-w-[50%] w-[100%]">
      <h1>JSX (JavaScript XML)</h1>
      <CodeExample code={code} />
    </section>
  );
}

function Gloria(name) {
  return (
    <div>
      <h2>Hello {name}!</h2>
    </div>
  );
}
