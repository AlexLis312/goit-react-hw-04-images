import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '47350680-86d30b4f2bd951cf6c4e0d295';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status !== 200) {
    throw new Error('Error fetching images');
  }
  console.log(response.data);
  return response.data.hits;
};
