import { useState, useEffect } from "react";
import { fetchData } from "./api/fetchData";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";
import arrow from "./assets/arrow.jpg";
const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("bmw+m5");
  const [largeImg, setLargeImg] = useState(null);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (page > 1) {
      fetchData(query, page).then((data) =>
        setImages([...images, ...data.hits])
      );
    } else {
      fetchData(query, page).then((data) => setImages(data.hits));
    }
  }, [query, page]);

  const handleQuery = (value) => {
    setImages("");
    setQuery(value);
  };

  const handleLargeImg = (image) => {
    setLargeImg(image);
  };

  const handleDelete = () => {
    setLargeImg(null);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", () => {
    setScroll(true);
  });

  return (
    <main className="App">
      <Searchbar handleQuery={handleQuery} />

      {images.length > 0 ? (
        <>
          <ImageGallery handleLargeImg={handleLargeImg} images={images} />
          <Button handleLoadMore={handleLoadMore} />
          {scroll ? (
            <button className="btn-scroll" onClick={handleScroll}>
              <img className="arrw" width={50} src={arrow} alt="arrow"></img>
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <NotFound />
      )}

      {largeImg ? (
        <Modal largeImg={largeImg} handleDelete={handleDelete} />
      ) : (
        ""
      )}
    </main>
  );
};

export default App;
