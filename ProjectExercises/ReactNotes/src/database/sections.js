export const sections = [
  {
    title: "Section 1: Getting Started",
    lectures: [
      {
        title: "Lecture A",
        description: "Description of lecture A",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
      {
        title: "Lecture B",
        description: "Description of lecture B",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
    ],
  },
  {
    title: "Section 2: JavaScript Refresher",
    lectures: [
      {
        title: "Export and import",
        description: "In general there are three different exports:",
        codeExamples: `
        //Default Export
          function sayHello(){
              console.log('Hello world.');
          };

          export default sayHello;

        import sayHello from '../scriptName.js'


        //Named export
        export sayHello'

        import { sayHello } from '../scriptName.js'


        //Exporting everyhing
        Either you can export line by line (while defining them)
        or you can export 'em all at the end.

        export const abc = 'abc';
        export const def = 'def';

        or

        export { abc, def };

        import * as utils from '../scriptName.js'
          `,
      },
      {
        title: "Objects and Classes",
        description: "Description of lecture D",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
      {
        title: "Arrays and array methods",
        description: "Description of lecture D",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
      {
        title: "Destructuring",
        description: "Description of lecture D",
        codeExamples: `
          const [a, b] = [1, 2];
          `,
      },
      {
        title: "Spread operator",
        description: "Description of lecture D",
        codeExamples: `
          const myList = ['a', 'b', 'c'];
          const newList = ['d', 'e', 'f', ...myList];
          `,
      },
      {
        title: "For of",
        description: "Description of lecture D",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
      {
        title: "Reference vs Primitive values",
        description: "Description of lecture D",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
      {
        title: "Next- Gen JS [Summary]",
        description: "Description of lecture D",
        codeExamples: `
          <h2>Some code<h2>
          `,
      },
      {
        title: "JS array Functions",
        description: "Some array functions WE HAVE to use;",
        codeExamples: `
          map
          findIndex
          filter
          reduce
          ..
          `,
      },
    ],
  },
  {
    title: "Section 3: React Essentials",
    lectures: [
      {
        title: "Components",
        description: "Description of lecture E",
        codeExamples: `
        //MyComponent.jsx
        function MyComponent({theProp}){
          return(<button>{theProp}</button>)
        }

        <MyComponent theProp={anythingYouWant}></MyComponent>
        `,
      },
      {
        title: "JSX",
        description: "Description of lecture F",
        codeExamples: `
        <h2>Some code<h2>
        `,
      },
      {
        title: "Children prop",
        description: "A special prop in React, reserved by it.",
        codeExamples: `
        //MyComponent.jsx
        function MyComponent({children}){
          return(<button>{children}</button>)
        }

        <MyComponent>{1 + 3}</MyComponent>
        `,
      },
      {
        title: "Events",
        description: "Description of lecture F",
        codeExamples: `
        //MyComponent.jsx
        function MyComponent({onSelected}){
          return(<button onClick={onSelected}>{children}</button>)
        }

        <MyComponent onSelected={aFunction}>{1 + 3}</MyComponent>
        `,
      },
      {
        title: "State and Hooks",
        description: "Description of lecture F",
        codeExamples: `
        <h2>Some code<h2>
        `,
      },
      {
        title: "Conditional rendering",
        description: "Description of lecture F",
        codeExamples: `
        <h2>Some code<h2>
        `,
      },
      {
        title: "Dynamic styling",
        description: "Description of lecture F",
        codeExamples: `
        <h2>Some code<h2>
        `,
      },
      {
        title: "Dynamic list content",
        description: "Description of lecture F",
        codeExamples: `
        <h2>Some code<h2>
        `,
      },
    ],
  },
];
