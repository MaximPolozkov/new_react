import React from "react";
import "./Modal.scss";

const Modal = ({active, setActive, children}) => {
    return(
        <div className={ active ? "modal active" : "modal"}>
            
            
            <div className={active ? "modal__content" : "modal__content"} onClick={e =>e.stopPropagation()}>
                <div className="modal__close" onClick={() => setActive(false)}>
                    <div className="modal__close-line modal__close-line--first"></div>
                    <div className="modal__close-line modal__close-line--second"></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal;