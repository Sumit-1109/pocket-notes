import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import styles from "./modal.module.css";
import "./commonStyles.css";

function Modal({setShowModal}) {

    const modalRef = useRef(null);

    const colorpallete = {
        purple: "rgba(179, 139, 250, 1)",
        pink: "rgba(255, 121, 242, 1)",
        sky: "rgba(67, 230, 252, 1)",
        orange: "rgba(241, 149, 118, 1)",
        navy: "rgba(0, 71, 255, 1)",
        blue: "rgba(102, 145, 255, 1)",
    };

    const closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)){
            setShowModal(false)
        }
    };

    useEffect(()=> {
        document.addEventListener('mousedown', closeModal);
        return ()=> {
            document.removeEventListener('mousedown', closeModal)
        };
    }, []);

  return (
    <div className={`flex-center ${styles.modalScreen}`}>

      <div className={styles.modalBox}>

        <form className={styles.formarea} ref={modalRef}>

          <div className={`align-center ${styles.header}`}>
            <p className={`roboto-medium ${styles.title}`}>Create New group</p>
          </div>

          <div className={`align-center ${styles.groupName}`}>
            <label htmlFor="groupName_Text" className='roboto-medium'>Group Name</label>
            <input 
                type="text" 
                placeholder="Enter group name"
                id="groupName_Text"
                className={`roboto-medium ${styles.groupName_Text}`}
            />
          </div>

          <div className={`align-center ${styles.colorTheme}`}>
            <p className={`roboto-medium ${styles.chooseColorText}`}>Choose Colour</p>
            <div className={`flex-center ${styles.colorPallete}`}>
            {Object.keys(colorpallete).map((colorKey) => (
                <button
                  key={colorKey}
                  type="button"
                  className={styles.chooseColor}
                  style={{ backgroundColor: colorpallete[colorKey] }}
                ></button>
              ))}
            </div>
          </div>

          <div className={styles.createButton}>
            <button type="submit" className={`roboto-regular ${styles.create}`}>Create</button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default Modal



Modal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
};
