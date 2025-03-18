import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeExample({ code, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
