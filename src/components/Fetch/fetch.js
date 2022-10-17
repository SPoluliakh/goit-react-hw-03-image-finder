import axios from 'axios';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

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

  // const res = await fetch(url);
  // const response = await res.jsone();

  if (!response.data.hits.length) {
    throw new Error(`No photos`);
  }
  // console.log(response);
  return response.data;
};
