import styles from "../../styles/Col.module.css";

const Col = ({ children }: any) => {
  return <div className={styles.Col}>{children}</div>;
};

export default Col;
