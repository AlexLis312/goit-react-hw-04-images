import React, { useState } from 'react';
import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import * as API from './services/API';

const App = () => {
  const { App: appContaiter } = styles;

  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAndSetImages = async (query, page, push = false) => {
    try {
      setIsLoading(true);
      const newImages = await API.fetchImages(query, page);

      setImages(prevImages =>
        push ? [...prevImages, ...newImages] : newImages
      );
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(true);
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async value => {
    setSearchQuery(value);
    setPage(1);
    setError(false);
    fetchAndSetImages(value, 1, false);
  };

  const handleLoadMore = async () => {
    fetchAndSetImages(searchQuery, page, true);
  };

  return (
    <div className={appContaiter}>
      <Searchbar onSubmit={handleSearch} />
      {error && <p>Error fetching images</p>}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length !== 0 && !isLoading && <Button onClick={handleLoadMore} />}
    </div>
  );
};

export default App;
