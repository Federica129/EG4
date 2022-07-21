import "./index.css";

const Modal = ({ visib, onHandleClick, pippo }) => {
  return (
    <>
      {visib && (
        <div className="Modal" onClick={onHandleClick}>
          <img className="box" src={pippo} alt="prova123" />
        </div>
      )}
    </>
  );
};

export default Modal;
