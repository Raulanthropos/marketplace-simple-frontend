// import { useState, useEffect } from "react"
// import { Row, Col, Card } from "react-bootstrap";

// function ProductList() {
//   const [products, setProducts] = useState([])
//   const [comments, setComments] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = process.env.REACT_APP_BE_URL
//         const response = await fetch(`${url}/products`)
//         const data = await response.json()
//         setProducts(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     fetchData()
//   }, [])

//   useEffect(() => {
//     const fetchDataComments = async () => {
//       try {
//         const url = process.env.REACT_APP_BE_URL
//         const response = await fetch(`${url}/comments`)
//         const data = await response.json()
//         setComments(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     fetchDataComments()
//   }, [])

//     return (
//       <div>
//         <h1>Product List</h1>
//         <Row xs={1} md={4} className="g-4">
//           {products.map((product) => (
//             <Col key={product.id}>
//               <Card style={{ width: "18rem" }}>
//                 {product.imageUrl && <Card.Img variant="top" src={product.imageUrl} style={{ maxHeight: "160.88px" }} />}
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>{product.description}</Card.Text>
//                   <Card.Text>{product.price}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     );
//   }
  

// export default ProductList

import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { getProductComments } from "../utils/utils";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.REACT_APP_BE_URL;
        const response = await fetch(`${url}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataComments = async () => {
      try {
        const url = process.env.REACT_APP_BE_URL;
        const response = await fetch(`${url}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataComments();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <Row xs={1} md={2} l={3} xl={4} className="g-4">
      {products.map((product) => (
  <Col key={product.id} style={{height: "450px", marginBottom: '4rem'}}>
    <Card style={{ width: "18rem", height: "450px" }}>
      {product.imageUrl && <Card.Img variant="top" src={product.imageUrl} style={{ maxHeight: "160.88px" }} />}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{getProductComments(product.id, comments).length} comments</small>
      </Card.Footer>
    </Card>
  </Col>
))}
      </Row>
    </div>
  );
}

export default ProductList;
