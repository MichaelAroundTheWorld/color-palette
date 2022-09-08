import { FC, useState } from "react";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import styles from "./Main.module.scss";
import { colorItems } from "../../data/data";
import cx from "classnames";
import { ColorItem } from "../../components/ColorItem/ColorItem";

export const Main: FC = () => {
  const [color, setColor] = useState("grey");
  const [copiedText, setCopiedText] = useState("");

  const handleSetText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    console.log(text);
  };
  return (
    <Wrapper background={color}>
      {copiedText ? (
        <h1 className={styles.header}>You just copied {copiedText}</h1>
      ) : (
        <></>
      )}
      <ColorItem setCurrentColor={setColor} setCopiedText={handleSetText} />
    </Wrapper>
  );
};
