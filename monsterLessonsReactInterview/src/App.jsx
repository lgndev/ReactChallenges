import useZustand from "./store/useZustand";

import Section from "./components/Section";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Bullets from "./components/Bullets";

const App = () => {
  const bears = useZustand((state) => state.bears);
  return (
    <div
      style={{
        padding: "10px",
        height: "100vh",
        position: "relative",
      }}
    >
      <Section title={"Introduction"}>
        <Question prompt={"Pros and cons to React"}>
          <Bullets />
          <Answer
            solutions={[
              "library, not a framework",
              "widely used",
              "big community with lots of documentation",
            ]}
          />
        </Question>
      </Section>
      <Section title={"Basic Knowledge"}>
        <Question prompt={"What makes react so powerful"}>
          <Bullets />
          <Answer
            solutions={[
              "this virtual DOM",
              "allows for quick and efficient DOM updates",
            ]}
          />
        </Question>
        <Question prompt={"What is the virtual DOM"}>
          <Bullets />
          <Answer
            solutions={[
              "lightweight JS representation of the DOM",
              "virtual DOM compares against prev virtual DOM",
              "the actual DOM is only updated when there are diffrences in the virtual DOM",
            ]}
          />
        </Question>
        <Question prompt={"What is JSX"}>
          <Bullets />
          <Answer
            solutions={[
              "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file",
              "JSX and React are two separate things, although they are often used together",
            ]}
          />
        </Question>
        <Question prompt={"Why do we use className"}>
          <Bullets />
          <Answer
            solutions={[
              "jsx is not html, but js",
              "class is a reserved word in js",
              "class is used to create ES6 classes",
            ]}
          />
        </Question>
        <Question prompt={"What are functional components"}>
          <Bullets />
          <Answer
            solutions={["components are just functions that return JSX"]}
          />
        </Question>
        <Question prompt={"How to pass props to the components"}>
          <Bullets />
          <Answer
            solutions={[
              "props are passed to a component as 'html attributes'",
              "props are accessible inside a componenet as the props parameter",
              "props is an obj",
            ]}
          />
        </Question>
        <Question prompt={"How to render a list inside React"}>
          <Bullets />
          <Answer solutions={["use the arr.map() to render a list of JSX"]} />
        </Question>
        <Question
          prompt={
            "What is a the key attribute and why is it bad to use index for it"
          }
        >
          <Bullets />
          <Answer
            solutions={[
              "Allows react to understand the arr that is being mapped",
              "Its ok to use i of map for the key as long as you're not mutating the array that is being mapped",
              "If the array will be mutated, you need to use a unique identifier",
            ]}
          />
        </Question>
        <Question prompt={"What is React.Fragment"}>
          <Bullets />
          <Answer
            solutions={[
              "<></>",
              "meets the condition that React requires a single root element to be returned in JSX",
            ]}
          />
        </Question>
        <Question prompt={"What is conditional rendering inside React"}>
          <Bullets />
          <Answer
            solutions={["Must use an expression in JSX", "&&    ||    ? :"]}
          />
        </Question>
        <Question prompt={"How to apply styles in React"}>
          <Bullets />
          <Answer
            solutions={[
              "import './app.css'",
              "imports the css file directly",
              "import {classes} from './app.modules.css'",
              "imports css file directly using modules",
              "modules scope classes to a component",
              "inline with style obj",
            ]}
          />
        </Question>
        <Question prompt={"How to add styles conditionally"}>
          <Bullets />
          <Answer solutions={["template literals", "? :"]} />
        </Question>
        <Question
          prompt={"How do parent and child components communicate in React"}
        >
          <Bullets />
          <Answer
            solutions={[
              "passing props",
              "state setter passed to child as prop",
            ]}
          />
        </Question>
        <Question prompt={"Can props be mutated"}>
          <Bullets />
          <Answer solutions={["no, props are read only in React"]} />
        </Question>
      </Section>
    </div>
  );
};

export default App;
