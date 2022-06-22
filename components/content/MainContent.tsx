import React from "react";

import styles from "../../styles/MainContent.module.css";

const MainContent = ({ children }: any) => {
  return <div className={styles.Container}>{children}</div>;
};

export default MainContent;
