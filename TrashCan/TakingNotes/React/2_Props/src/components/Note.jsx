import CodeExample from "./CodeExample";

export default function Note() {
  const code = `
  function Gloria(props) {
  const result = \`Hello \${props.name}, welcome!\`;
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}

function App() {
  return <Gloria />;
}
`;

  const codeTwo = `
  function Gloria({name}) {
  const result = \`Hello \${name}, welcome!\`;
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}

function App() {
  return <Gloria />;
}
`;

  const codeThree = `
function Gloria({name = 'Gloria'}) {
const result = \`Hello \${name}, welcome!\`;
return (
  <div>
    <h2>{result}</h2>
  </div>
);
}

function App() {
return <Gloria />;
}
`;

  const codeFour = `
function Gloria({name = 'Gloria', ...props}) {
const result = \`Hello \${name}, welcome!\`;
return (
  <div>
    <h2 {...props}>{result}</h2>
  </div>
);
}

function App() {
return <Gloria />;
}
`;

  return (
    <section className="max-w-[80%] w-[100%]">
      <h1 className="mb-10 text-3xl">Components</h1>
      <div className="grid grid-cols-2 gap-[20px]">
        <CodeExample
          code={code}
          title={
            "Without destructuring, every prop will be property of the main prop"
          }
        />
        <CodeExample
          code={codeTwo}
          title={"With destructuring every prop name will be unique"}
        />
        <CodeExample code={codeThree} title={"Default prop values"} />
        <CodeExample code={codeFour} title={"Spreading props"} />
      </div>
    </section>
  );
}
