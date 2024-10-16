import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next';
const Footer : React.FC = () => {
    const {t} = useTranslation();
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.left_footer_container}>

                </div>
                <div className={styles.vertical_line}></div>
                <div className={styles.right_footer_container}>
                    <span style={{fontSize:'16px', marginTop:'auto'}}>{t('footer.links')}:</span>
                    <Link target="_blank" to="https://www.linkedin.com/in/cristian-martin-afonso-nieto/"><FaLinkedin/></Link>
                    <Link target="_blank" to="https://github.com/CristianAfonso"><FaGithub/></Link>
                    <Link target="_blank" to="mailto:afonsonietocristian@gmail.com"><SiMinutemailer/></Link>
                    <Link target="_blank" to="tel:+34680332061"><HiPhoneArrowUpRight /></Link>
                </div>
            </div>
            <span>
                © 2024 – Cristian Afonso
            </span>
        </footer>
    )
}
export default Footer;