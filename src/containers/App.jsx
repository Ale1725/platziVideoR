import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Carouselitem from "../components/Carouselitem";
import Footer from "../components/Footer";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />

      {videos.mylist.lenght > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <Carouselitem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map((item) => (
            <Carouselitem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi">
        <Carousel>
          <Carouselitem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
