import axios from "../../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../features/productSlice";
import ProductPreview from "../../components/ProductPreview";
// import Navigation from "../../components/Navigation/Navigation";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./styles.module.css";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/HomeBanner/Banner";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 10);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div className={styles.home_container}>
      <Navigation />
      <Hero />
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={3}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className={styles.category_tile}
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
      <div className="seemore-con">
        <button className="seemore-btn">
          {/* <Link
            to=""
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          > */}
            <a href="/category/all">See more {">>"}</a>
          {/* </Link> */}
        </button>
      </div>
      <div
        className="featured-products-container mt-5"
        style={{ textAlign: "left" }}
      >
        <div className="filter-tab">
          <div className="styles-distance">
            <select
            // value={distance}
            // onChange={(e) => setDistance(e.target.value)}
            >
              <option value="any">Price</option>
              <option value="within-5">Within 5 Miles</option>
              <option value="within-10">Within 10 Miles</option>
            </select>
          </div>
          <div className="styles-distance">
            <select
            // value={distance}
            // onChange={(e) => setDistance(e.target.value)}
            >
              <option value="any">Any Distance</option>
              <option value="within-5">Within 5 Miles</option>
              <option value="within-10">Within 10 Miles</option>
            </select>
          </div>
          <div className="styles-distance">
            <select
            // value={distance}
            // onChange={(e) => setDistance(e.target.value)}
            >
              <option value="any">Any Distance</option>
              <option value="within-5">Within 5 Miles</option>
              <option value="within-10">Within 10 Miles</option>
            </select>
          </div>
          <div className="styles-distance">
            <select
            // value={distance}
            // onChange={(e) => setDistance(e.target.value)}
            >
              <option value="any">Any Distance</option>
              <option value="within-5">Within 5 Miles</option>
              <option value="within-10">Within 10 Miles</option>
            </select>
          </div>
          <div className="">
            <button className="filter-btn">filter</button>
          </div>
        </div>
        <h2
          style={{
            marginLeft: "8vw",
            fontFamily: "poppins",
            fontSize: "1.2vw",
            fontWeight: "600",
          }}
        >
          Top picks for you
        </h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
      </div>
      {/* sale banner */}
      {/* <div className="sale__banner--container mt-4">
                <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt=""/>
            </div> */}
        <Banner />
    </div>
  );
}

export default Home;
