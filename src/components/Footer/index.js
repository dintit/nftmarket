import React from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";

export const Footer = () => {
    return (
        <Container className={styles.footer}>
            <div className={styles.footer__top}>
                <div>
                    <img src={Logo} alt="logo" />
                    <h3>The New Creative Economy.</h3>
                </div>
                <nav>
                    <ul>
                        <li>Crypter.</li>
                        <li>
                            <a href="#">Discover</a>
                        </li>
                        <li>
                            <a href="#">Connect wallet</a>
                        </li>
                        <li>
                            <a href="#">Create item</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Info</li>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li>
                            <a href="#">Demos</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <p>Join Newsletter</p>
                    <p>Subscribe our newsletter to get more free design course and resource</p>
                    <input type="text" placeholder="Enter your email" />
                    <button>{"->"}</button>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <p className={styles.footer__copy}>Copyright © 2021 UI8 LLC. All rights reserved</p>
                <p className={styles.footer__cookies}>
                    We use cookies for better service. <span>Accept</span>
                </p>
            </div>
        </Container>
    );
};

export default Footer;
