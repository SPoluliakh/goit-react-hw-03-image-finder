import axios from 'axios';

export const fetch = async (name, pageNumber) => {
  const API_KEY = `29948734-f0f2c73b982a8559ced5d44b7`;
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: `${name}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: pageNumber,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;
  const response = await axios.get(url);
  if (!response.data.hits.length) {
    throw new Error(`No photos`);
  }
  return response.data;
};
