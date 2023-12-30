import {BiHome, BiInfoCircle, BiBasket, BiUser} from "react-icons/bi/index"
import { CustomLink } from "./CustomLink/CustomLink";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import logo from "../assets/image/logotype/pngwing.com (2).png"
import { motion } from "framer-motion"



export function Layout() {

    return (
        <>
        <div className={styles.header__container}>
            <img src={logo} alt="логотип" className={styles.logo__nav} />
            <ul className={styles.nav_links}>
                <li><CustomLink to="/home" className={styles.bth__links}>Домашняя<BiHome className={styles.icons}/></CustomLink></li>
                <li><CustomLink to="/about" className={styles.bth__links}>О Ресторане<BiInfoCircle className={styles.icons}/></CustomLink></li>
                <li><CustomLink to="/basket" className={styles.bth__links}>Корзина<BiBasket className={styles.icons}/></CustomLink></li>
                <li><CustomLink to="/auth" className={styles.bth__links}>Профиль<BiUser className={styles.icons}/></CustomLink></li>
                
            </ul>
        </div>

        <Outlet />
        </>
    );
}