import axios from "axios";

export const fetchData = async function (query, page) {
  const API_KEY = "48652478-8ab3f1e411d45e2d55c4313cc";
  const API = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=16&lang=ru=en`;

  const { data } = await axios.get(API);

  return data;
};
