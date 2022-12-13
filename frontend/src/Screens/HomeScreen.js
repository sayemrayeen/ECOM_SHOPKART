import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { listProducts } from "../actions/productsActions";
import { useParams } from "react-router-dom";
import Paginate from "../Components/Paginate";
import ProductCarousel from "../Components/ProductCarousel";
import { Link } from "react-router-dom";
import Meta from "../Components/Meta";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  const keywords = keyword;
  const pageNumbers = pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keywords, pageNumbers));
  }, [dispatch, keywords, pageNumbers]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
