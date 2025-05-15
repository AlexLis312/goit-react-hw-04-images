import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </li>
    );
  }
}
