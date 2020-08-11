import React from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Carouselitem from "../components/Carouselitem";
import Footer from "../components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories>
      <Carousel>
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>

    <Categories>
      <Carousel>
        <Carouselitem />
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>

    <Categories>
      <Carousel>
        <Carouselitem />
        <Carouselitem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
