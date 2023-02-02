import { CgClose } from "react-icons/cg";

const Modal = (props) => {
    return (
        <div
            className="fd-modal fd-shadow"
            key={props.title ? props.title : ""}
        >
            <div className="fd-modal__shadow" onClick={props.closeModal}></div>
            <div className="fd-modal__inner">
                <button className="close" onClick={props.closeModal}>
                    <CgClose />
                </button>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
