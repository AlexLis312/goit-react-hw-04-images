import React, { Component } from 'react';
import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import * as API from './services/API';

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    error: false,
  };

  handleSearch = async value => {
    const { page } = this.state;
    try {
      this.setState({ isLoading: true, searchQuery: value, images: [] });
      const images = await API.fetchImages(value, page);
      this.setState({ images, isLoading: false, page: page + 1 });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.error('Error fetching images:', error);
    }
  };

  handleLoadMore = async () => {
    const { page, searchQuery, images } = this.state;
    try {
      this.setState({ isLoading: true });
      const newImages = await API.fetchImages(searchQuery, page);
      this.setState({
        images: [...images, ...newImages],
        page: page + 1,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.error('Error fetching images:', error);
    }
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>Error fetching images</p>}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length !== 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
