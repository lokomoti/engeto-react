import { useEffect, useState } from "react";
import randomTexts from "../../../assets/randomText";
import { getRandomElement } from "../../../utils/random";

const RandomText = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(getRandomElement(randomTexts));
  });

  return (
    <span
      style={{
        color: "yellow",
      }}
    >
      {text}
    </span>
  );
};

export default RandomText;
