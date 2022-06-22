import styles from "../../styles/Row.module.css";

const Row = ({ children }: any) => {
  return <div className={styles.Row}>{children}</div>;
};

export default Row;
