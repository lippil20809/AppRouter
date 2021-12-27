import axios from "axios";

export const getPhotos = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return data;
};

export const getPhoto = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );

  return data;
};
