import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Wrapper.module.scss";

export const Wrapper: FC<PropsWithChildren & { background: string }> = ({
  children,
  background,
}) => {
  return (
    <div className={styles.App} style={{ background: background }}>
      <div className={styles.main}>
        <section className={styles.content}>{children}</section>
      </div>
    </div>
  );
};
