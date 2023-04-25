import React, { useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../services/appApi";
import axios from "../../axios";
import "./NewProduct.css";

function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  const [createProduct, { isError, error, isLoading, isSuccess }] =
    useCreateProductMutation();

  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
      .delete(`/images/${imgObj.public_id}/`)
      .then((res) => {
        setImgToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !description || !price || !category || !images.length) {
      return alert("Please fill out all the fields");
    }
    createProduct({ name, description, price, category, images }).then(
      ({ data }) => {
        if (data.length > 0) {
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      }
    );
  }

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dhxwwwqt8",
        uploadPreset: "starbucks",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
  }

  return (
    <div className="new-product-page">
      <Row className="add-product-container">
        <Col md={6} className="new-product__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 className="mt-4">Create A Product</h1>
            {isSuccess && (
              <Alert variant="success">Product created with succcess</Alert>
            )}
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <div className="container-new-all">
            <div className="new-div-left">
            <div className="desc-div">
              <h3>Description</h3>
              <div className="desc-inner">
                <Form.Group className="mb-3">
                  <Form.Label className="new-label">Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="new-label">
                    Product Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Product description"
                    style={{ height: "100px" }}
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="category-div" id="second-div">
              <h3>Category & Pricing</h3>
              <div className="pricing-inner">
                <Form.Group className="mb-3">
                  <Form.Label className="new-label">Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Price ($)"
                    value={price}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 new-label"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option disabled selected>
                      -- Select One --
                    </option>
                    <option value="drinks">drinks</option>
                    <option value="food">food</option>
                    <option value="homemade">homemade</option>
                    <option value="merch">merch</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            </div>
           <div className="new-div-right">
           <div className="images-div">
                <h3>Product Images</h3>
                <div className="images-inner">
                <Form.Group className="mb-3">
              <Button type="button" onClick={showWidget} className="upload-btn">
                Upload Images
              </Button>
              <div className="images-preview-container">
                {images.map((image) => (
                  <div className="image-preview">
                    <img src={image.url} alt="product-img" />
                    {imgToRemove != image.public_id && (
                      <i
                        className="fa fa-times-circle"
                        onClick={() => handleRemoveImg(image)}
                      ></i>
                    )}
                  </div>
                ))}
              </div>
            </Form.Group>
                </div>
            </div>
            <Form.Group>
              <Button type="submit" className="create-btn" disabled={isLoading || isSuccess}>
                Create Product
              </Button>
            </Form.Group>
           </div>
            </div>             
          </Form>
        </Col>
        <Col md={6} className="new-product__image--container"></Col>
      </Row>
    </div>
  );
}

export default NewProduct;
