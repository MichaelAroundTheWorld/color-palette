import { FC, useState } from "react";
import { colorItems } from "../../data/data";
import cx from "classnames";
import styles from "./ColorItems.module.scss";
import { ColorItem } from "../ColorItem/ColorItem";

interface ColorItemsProps {
  className?: string;
  setCurrentColor: (color: string) => void;
  setCopiedText: (text: string) => void;
}

export const ColorItems: FC<ColorItemsProps> = ({
  className,
  setCurrentColor,
  setCopiedText,
}) => {
  // state for changing subtitle color after clicking on color-item
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className={cx(styles.colorPaletteBody, className)}>
      {colorItems.map((colorItem) => (
        <ColorItem
          itemClassName={cx(styles.baseItem, styles[colorItem.className])}
          subtitle={colorItem.hex}
          handleItemClick={setCurrentColor}
          color={colorItem.hex}
          setCopied={setCopiedText}
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  );
};
