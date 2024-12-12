
import styles from "../styles/footer.module.css"

import sendIcon from "../assets/send-icon.svg"
import qrcode from "../assets/qrcode.png"
import googlePlayBanner from "../assets/download-googleplay.png"
import appStoreBanner from "../assets/download-appstore.png"
import facebookIcon from "../assets/facebook-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg"
import linkedinIcon from "../assets/linkedin-icon.svg"
import twitterIcon from "../assets/twitter-icon.svg"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h1>Exclusive</h1>
                <h4>Subscribe</h4>
                <span>Get 10% off your first order</span>
                <div className={styles.email_contact}>
                    <input type="text" placeholder="Enter your email"/>
                    <img src={sendIcon} alt="Send" width={24} height={24}/>
                </div>
            </div>
            <div className={styles.column}>
                <h4>Support</h4>
                <span style={{maxWidth:"180px"}}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
                <span>exclusive@gmail.com</span>
                <span>+88015-88888-9999</span>
            </div>
            <div className={styles.column}>
                <h4>Account</h4>
                <a href="/">My account</a>
                <a href="/signup">Login / Register</a>
                <a href="/cart">Cart</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/shop">Shop</a>
            </div>
            <div className={styles.column}>
                <h4>Quick link</h4>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-use">Terms Of Use</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact</a>
            </div>
            <div className={styles.column}>
                <h4>Download App</h4>
                <h5>Save $3 with App New User Only</h5>
                <div className={styles.grid}>
                    <img style={{gridRowStart:1,gridRowEnd:2,gridColumnStart:1,gridColumnEnd:1}} src={qrcode} alt="qrcode"/>
                    <img style={{gridRowStart:1,gridRowEnd:1,gridColumnStart:2,gridColumnEnd:2}} src={googlePlayBanner} alt="googleplay"/>
                    <img style={{gridRowStart:2,gridRowEnd:2,gridColumnStart:2,gridColumnEnd:2}} src={appStoreBanner} alt="appstore"/>
                </div>
                <div className={styles.icons_wrapper}>
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={twitterIcon} alt="Twitter" />
                    <img src={instagramIcon} alt="Instagram"/>
                    <img src={linkedinIcon} alt="Linkedin" />
                </div>
            </div>
        </footer>
    )
}