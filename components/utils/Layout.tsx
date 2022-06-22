import React, { Children } from "react";

import styles from "../../styles/Layout.module.css";
import Col from "./Col";

import Footer from "../footer/Footer";
import Row from "./Row";
import SupportBar from "../header/SupportBar";
import Menu from "../header/Menu";
import LeftContent from "../content/LeftContent";
import RightContent from "../content/RightContent";
import MainContent from "../content/MainContent";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.Container}>
      <Col>
        <div className={styles.Header}>
          <Row>
            <SupportBar />
            <Menu />
          </Row>
        </div>

        <div className={styles.Content}>
          <div className={styles.LeftContent}>
            <LeftContent />
          </div>
          <div className={styles.MainContent}>
            <MainContent>{children}</MainContent>
          </div>
          <div className={styles.RightContent}>
            <RightContent />
          </div>
        </div>
        <div className={styles.Footer}>
          <Footer />
        </div>
      </Col>
    </div>
  );
};

export default Layout;
