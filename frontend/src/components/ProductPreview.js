import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductPreview({ _id, category, name, pictures }) {
    return (
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px"}}>
            <Card style={{ width: "20rem", margin: "10px"}}>
                <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{ height: "14vw", objectFit: "cover" , backgroundColor: "#f3e3c4"  }} />
                <Card.Body style={{textAlign: "left", marginLeft: "-0.9vw"}}>
                    <Card.Title style={{fontFamily: "Poppins", fontSize: "1vw"}}>{name}</Card.Title>
                    <Badge bg="transparent" style={{color: "rgb(87 181 87)", marginLeft: "-0.5vw", fontSize: "0.9vw", fontWeight: "500"}}>
                        {category}
                    </Badge>
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default ProductPreview;
