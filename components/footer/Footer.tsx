import Link from "next/link";
import React from "react";

import styles from "../../styles/Footer.module.css";
import Row from "../utils/Row";
import Col from "../utils/Col";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Você pode nos encontrar em:</div>

      <Row>
        <div className={styles.socialMediaContainer}>
          <div>
            <Link href={""}>
              <FaFacebook />
            </Link>
          </div>
          <div>
            <Link href={""}>
              <FaInstagram />
            </Link>
          </div>
          <div>
            <Link href={""}>
              <FaYoutube />
            </Link>
          </div>
        </div>
      </Row>

      <Row>
        <div className={styles.footerSubItem}>
          <Col>
            <div className={styles.footerSubItemTitle}>Produtos</div>
            <Link href={""}>Ecommerce</Link>
            <Link href={""}>Desenvolvimento de Software</Link>
            <Link href={""}>Projetos</Link>
          </Col>
        </div>
        <div className={styles.footerSubItem}>
          <Col>
            <div className={styles.footerSubItemTitle}>Empresa</div>
            <Link href={""}>Contato</Link>
            <Link href={""}>Suporte</Link>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
