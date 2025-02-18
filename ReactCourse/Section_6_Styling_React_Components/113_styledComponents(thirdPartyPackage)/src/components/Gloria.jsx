import { useState } from "react";
import { styled } from "styled-components";
import classes from "./Gloria.module.css";

const MainSection = styled.section`
  max-width: 44%;
  margin: auto;
`;

function Gloria() {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <MainSection>
      <p className={classes.paragraph}>
        The Grid. A digital frontier. I tried to picture clusters of information
        as they moved through the computer. What did they look like? Ships?
        motorcycles? Were the circuits like freeways? I kept dreaming of a world
        I thought I'd never see. And then, one day, I got in.
        <label>Something..</label>
      </p>
      <button
        className={buttonPressed ? classes.colorRed : undefined}
        onClick={() => setButtonPressed(!buttonPressed)}
      >
        Change Color
      </button>
    </MainSection>
  );
}

export default Gloria;
