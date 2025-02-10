const Modal = ({ largeImg, handleDelete }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <button className="modal__close" onClick={handleDelete}>
          X
        </button>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
};

export default Modal;
