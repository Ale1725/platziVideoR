import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Carouselitem from "../components/Carouselitem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useinitialState";
import "../components/FontawesomeIcon";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <Carouselitem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Featured">
        <Carousel>
          {initialState.trends.map((item) => (
            <Carouselitem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Beginner">
        <Carousel>
          {initialState.originals.map((item) => (
            <Carouselitem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
