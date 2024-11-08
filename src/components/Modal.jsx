import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import styles from "./modal.module.css";
import "./commonStyles.css";

function Modal({
  setShowModal,
  setModalData,
  modalData,
  noteGroups,
  setNoteGroups,
  handleSaveData,
}) {
  const modalRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  const colorpallete = {
    purple: "rgba(179, 139, 250, 1)",
    pink: "rgba(255, 121, 242, 1)",
    sky: "rgba(67, 230, 252, 1)",
    orange: "rgba(241, 149, 118, 1)",
    navy: "rgba(0, 71, 255, 1)",
    blue: "rgba(102, 145, 255, 1)",
  };

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      noteGroups.some(
        (note) =>
          note.noteGroupName.toLowerCase() === modalData.name.toLowerCase()
      )
    ) {
      setError("Note group with this name already exists");
      return;
    }

    if (error === "") {
      const newNoteData = {
        noteGroupName: modalData.name,
        noteLogoColor: modalData.color,
        notes: [],
      };
      setNoteGroups((prevGroups) => {
        const updatedNoteGroup = [...prevGroups, newNoteData];
        handleSaveData(updatedNoteGroup);
        return updatedNoteGroup;
      });
      setModalData({
        name: "",
        color: "",
      });
      setShowModal(false);
    } else {
      return;
    }
  };

  const handleInputChange = (e) => {
    setError("");
    setModalData((prev) => ({ ...prev, name: e.target.value }));
    setIsDisabled(!(e.target.value.trim() !== "" && modalData.color !== ""));
  };

  const handleColorSelect = (e, selectedColor) => {
    setModalData((prev) => ({ ...prev, color: selectedColor }));
    setIsDisabled(!(modalData.name.trim() !== "" && selectedColor !== ""));
  };

  return (
    <div className={`flex-center ${styles.modalScreen}`}>
      <div className={styles.modalBox}>
        <form
          id="modalData"
          onSubmit={handleSubmit}
          className={styles.formarea}
          ref={modalRef}
        >
          <div className={`align-center ${styles.header}`}>
            <p className={`roboto-medium ${styles.title}`}>Create New group</p>
          </div>

          <div className={`${styles.groupName}`}>
            <div className={`align-center ${styles.nameContainer}`}>
              <label htmlFor="groupName_Text" className="roboto-medium">
                Group Name
              </label>
              <input
                type="text"
                placeholder="Enter group name"
                id="groupName_Text"
                className={`roboto-medium ${styles.groupName_Text}`}
                value={modalData.name}
                onChange={handleInputChange}
              />
            </div>
            <p className={`${styles.errorMessage} roboto-regular`}>
              {error && error}
            </p>
          </div>

          <div className={`align-center ${styles.colorTheme}`}>
            <label htmlFor="chooseColor" className={`roboto-medium ${styles.chooseColorText}`}>
              Choose Colour
            </label>
            <div className={`flex-center ${styles.colorPallete}`}>
              {Object.keys(colorpallete).map((colorKey) => (
                <div
                  id="chooseColor"
                  key={colorKey}
                  type="button"
                  className={`${styles.chooseColor} ${modalData.color === colorpallete[colorKey] ? styles.glow : ''}`}
                  style={{ backgroundColor: colorpallete[colorKey] }}
                  onClick={(e) => handleColorSelect(e, colorpallete[colorKey])}
                ></div>
              ))}
            </div>
          </div>

          <div className={styles.createButton}>
            <button
              type="submit"
              className={`roboto-regular ${styles.create}`}
              disabled={isDisabled}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  setModalData: PropTypes.func.isRequired,
  noteGroups: PropTypes.arrayOf(
    PropTypes.shape({
      noteGroupName: PropTypes.string.isRequired,
      noteLogoColor: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  setNoteGroups: PropTypes.func.isRequired,
  handleSaveData: PropTypes.func.isRequired,
};
