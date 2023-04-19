import ReactDOM from 'react-dom';
import './modal.scss';
import React, { useRef, useState } from 'react';

interface MyProps {
  children: string | JSX.Element[] | JSX.Element;
}

function Modal(props: MyProps): JSX.Element {
  const modalWindow = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(true);

  const closeModalWindow = () => {
    setModal(false);
  };

  const closeWithOverlayClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    const target = e.target as HTMLDivElement;
    const modalEl = modalWindow.current;
    if (modalEl?.contains && !modalEl.contains(target)) {
      closeModalWindow();
    }
  };

  return ReactDOM.createPortal(
    modal && (
      <div
        className="overlay"
        onClick={closeWithOverlayClick}
        onKeyDown={closeWithOverlayClick}
        role="button"
        tabIndex={0}
      >
        <div className="container" ref={modalWindow}>
          {props.children}
        </div>
      </div>
    ),
    document.body
  );
}

export default Modal;
