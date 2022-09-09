import { FC, useState } from "react";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import styles from "./Main.module.scss";
import { ColorItems } from "../../components/ColorItems/ColorItems";

export const Main: FC = () => {
  const [color, setColor] = useState("grey");
  const [copiedText, setCopiedText] = useState("");

  const handleSetText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  };
  return (
    <Wrapper background={color}>
      {copiedText ? (
        <h1 className={styles.header}>You just copied {copiedText}</h1>
      ) : (
        <h1 className={styles.header}>You can copy hex by clicking on it</h1>
      )}
      <ColorItems setCurrentColor={setColor} setCopiedText={handleSetText} />
    </Wrapper>
  );
};
