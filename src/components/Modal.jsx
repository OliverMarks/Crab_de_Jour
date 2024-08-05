
import { useEffect, useRef } from "react";


export default function WelcomeModal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      className="welcome-modal"
      ref={ref}
      onCancel={closeModal}
    >
      
      {children}
      
      
      
    
    </dialog>
  );
}