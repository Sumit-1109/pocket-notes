import mainImage from "../assets/main-image.png";
import lock from '../assets/lock.png'
import styles from './rightsection.module.css'
import './commonStyles.css';

function RightSection() {
  return (
    <div className={`flex-center ${styles.rightContainer}`}>
      <div className={`flex-center ${styles.rightBody}`}>
      <div className={styles.image}>
        <img src={mainImage} alt="notes-image" className={styles.img} />
      </div>

        <p className={`${styles.headingText} roboto-bold`}>Pocket Notes</p>


        <p className={`${styles.aboutText} roboto-medium`}>Send and receive messages without keeping your phone online.
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

      </div>
      <div className={`flex-center ${styles.disclaimer}`}>
        <img src={lock} alt="lock" />
        <p className={`${styles.disclaimerText} roboto-regular`}>end-to-end encrypted</p>
      </div>
    </div>
  )
}

export default RightSection
