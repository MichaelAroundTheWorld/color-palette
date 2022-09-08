import { FC, useState } from "react";
import { colorItems } from "../../data/data";
import cx from "classnames";
import styles from "./ColorItem.module.scss";

interface ColorItemProps {
  className?: string;
  setCurrentColor: (color: string) => void;
  setCopiedText: (text: string) => void;
}

export const ColorItem: FC<ColorItemProps> = ({
  className,
  setCurrentColor,
  setCopiedText,
}) => {
  return (
    <div className={cx(styles.colorPaletteBody, className)}>
      {colorItems.map((colorItem) => (
        <div className={styles.itemBody}>
          <div
            className={cx(styles.baseItem, styles[colorItem.className])}
            onClick={() => setCurrentColor(colorItem.hex)}
          />
          <h3 onClick={() => setCopiedText(colorItem.hex)}>{colorItem.hex}</h3>
        </div>
      ))}
    </div>
  );
};
