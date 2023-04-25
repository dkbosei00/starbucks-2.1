import axios from "../../axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Container,
  Row,
  Col,
  Badge,
  ButtonGroup,
  Form,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import SimilarProduct from "../../components/SimilarProduct";
import "./ProductPage.css";
import { LinkContainer } from "react-router-bootstrap";
import { useAddToCartMutation } from "../../services/appApi";
import ToastMessage from "../../components/ToastMessage";
import Cart from "../../assets/cart.png";
import Star from "../../assets/star.png";
import Cup from "../../assets/coffee-cup.png";

function ProductPage() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [addToCart, { isSuccess }] = useAddToCartMutation();

  const handleDragStart = (e) => e.preventDefault();
  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      setProduct(data.product);
      setSimilar(data.similar);
    });
  }, [id]);

  if (!product) {
    return <Loading />;
  }
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const images = product.pictures.map((picture) => (
    <img
      className="product__carousel--image"
      src={picture.url}
      onDragStart={handleDragStart}
      alt=""
    />
  ));

  let similarProducts = [];
  if (similar) {
    similarProducts = similar.map((product, idx) => (
      <div className="item" data-value={idx}>
        <SimilarProduct {...product} />
      </div>
    ));
  }

  return (
    <div
      className="pt-4"
      style={{
        position: "relative",
        backgroundColor: "#fff9f4",
        padding: "7vw",
      }}
    >
      <Row>
        <Col lg={6} className="pt-4 product-details">
          <h1>{product.name}</h1>
          <p>
            <Badge bg="primary">{product.category}</Badge>
          </p>
          <div className="price-rate">
            <div className="rating-stars">
              <i>
                <img src={Star} alt="rating star" />
              </i>
              <i>
                <img src={Star} alt="rating star" />
              </i>
              <i>
                <img src={Star} alt="rating star" />
              </i>
              <i>
                <img src={Star} alt="rating star" />
              </i>
              <i>
                <img src={Star} alt="rating star" />
              </i>
            </div>
            <p className="product__price">$ {product.price}</p>
          </div>
          <p style={{ textAlign: "justify" }} className="py-3 product-desc">
            {product.description}
            {/* <strong>Description:</strong>  */}
          </p>
          {user && !user.isAdmin && (
            <div>
              <h3 className="size-header">Size options</h3>
              <div className="cup-sizes">
                <div>
                  <img src={Cup} alt="cup-size" className="cup-small" />
                  <div className="size-det">
                    <p className="size-name">Tall</p>
                    <p className="size-m">12 fl oz</p>
                  </div>
                </div>
                <div>
                  <img src={Cup} alt="cup-size" className="cup-medium" />
                  <div className="size-det">
                    <p className="size-name">Grande</p>
                    <p className="size-m">16 fl oz</p>
                  </div>
                </div>
                <div>
                  <img src={Cup} alt="cup-size" className="cup-large" />
                  <div className="size-det">
                    <p className="size-name">Venti</p>
                    <p className="size-m">24 fl oz</p>
                  </div>
                </div>
              </div>
              <ButtonGroup style={{ width: "60%", gap: "2vw" }}>
                <Form.Select
                  size="lg"
                  style={{ width: "40%", borderRadius: "0" }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
                <Button
                  className="add-to-cart-btn"
                  onClick={() =>
                    addToCart({
                      userId: user._id,
                      productId: id,
                      price: product.price,
                      image: product.pictures[0].url,
                    })
                  }
                >
                  Add to cart{" "}
                  <img src={Cart} alt="cart-icon" className="cart-icon" />
                </Button>
              </ButtonGroup>
            </div>
          )}
          {user && user.isAdmin && (
            <LinkContainer to={`/product/${product._id}/edit`}>
              <Button size="lg">Edit Product</Button>
            </LinkContainer>
          )}
          {isSuccess && (
            <ToastMessage
              bg="info"
              title="Added to cart"
              body={`${product.name} is in your cart`}
            />
          )}
        </Col>
        <Col lg={6}>
          <AliceCarousel
            className="product-image"
            mouseTracking
            items={images}
            controlsStrategy="alternate"
          />
          {/* <div> */}
          {/* <img src={{images}} alt="product-img" className="product-image"/> */}
          {/* </div> */}
        </Col>
      </Row>
      <div className="my-4 sim-wrapper">
        <h2 className="sim-header">Similar Products</h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <AliceCarousel
            className="product-similar"
            mouseTracking
            items={similarProducts}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
