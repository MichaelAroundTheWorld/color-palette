import { FC } from "react";
import styles from "./ColorItem.module.scss";
import cx from "classnames";

interface ColorItemProps {
  itemClassName: string;
  color: string;
  handleItemClick: (color: string) => void;
  subtitle: string;
  setCopied: (text: string) => void;
  setSelectedColor: (text: string) => void;
  selectedColor: string;
}

export const ColorItem: FC<ColorItemProps> = ({
  itemClassName,
  subtitle,
  handleItemClick,
  color,
  setCopied,
  setSelectedColor,
  selectedColor,
}) => {
  return (
    <div className={styles.itemBody}>
      <div
        className={itemClassName}
        onClick={() => {
          handleItemClick(color);
          setSelectedColor(color);
        }}
      />
      <h3
        className={cx(styles.subtitle, {
          [styles.activeText]: selectedColor === subtitle,
        })}
        onClick={() => setCopied(subtitle)}
      >
        {subtitle}
      </h3>
    </div>
  );
};
