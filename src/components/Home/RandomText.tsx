import { useEffect, useState } from "react";
import { getRandomElement } from "../../utils/random";
import data from "../../helpers/data.json";

const randomTexts = data["randomTexts"];

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
