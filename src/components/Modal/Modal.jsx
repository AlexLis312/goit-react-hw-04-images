import React, { useEffect } from 'react';
import styles from './Modal.module.css';
export const Modal = ({ largeImageURL, tags, onClose }) => {
  const { Overlay, Modal } = styles;

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={Overlay} onClick={onClose}>
      <div className={Modal} onClick={e => e.stopPropagation()}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
// onClick={() => onClose(largeImageURL)}
