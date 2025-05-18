import React, { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal
          onClose={toggleModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
    </li>
  );
};

export default ImageGalleryItem;
