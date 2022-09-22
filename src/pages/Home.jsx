import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import catFactService from "../services/catFactService";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCatFact from "../components/SingleCatFact";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function Home() {
  const [catFacts, setCatFacts] = useState({
    random: [],
    paginated: [],
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
  });

  useEffect(() => {
    catFactService.getRandom().then(onGetRandomSuccess).catch(onGetRandomError);
    catFactService
      .getPaginated(1)
      .then(onGetPaginatedSuccess)
      .catch(onGetPaginatedError);
  }, []);

  const onGetRandomSuccess = (response) => {
    setCatFacts((prevState) => {
      const pageData = { ...prevState };
      pageData.random = response.data.fact;
      return pageData;
    });
  };

  const onGetRandomError = (err) => {
    console.log("error:", err);
  };

  const onGetPaginatedSuccess = (response) => {
    setCatFacts((prevState) => {
      const pageData = { ...prevState };
      pageData.paginated = response.data.data;
      return pageData;
    });
  };

  const onGetPaginatedError = (err) => {
    console.log("error:", err);
  };

  const mapCatFacts = (fact, index) => {
    return <SingleCatFact key={index} fact={fact} />;
  };

  const onPaginationChange = (e) => {
    setPagination((prevState) => {
      const paginationData = { ...prevState };
      paginationData.currentPage = e;
      return paginationData;
    });
    catFactService
      .getPaginated(e)
      .then(onGetPaginatedSuccess)
      .catch(onGetPaginatedError);
  };

  return (
    <React.Fragment>
      <div className="mt-3">
        <Row className="mb-5 justify-content-center text-center text-decoration-underline">
          <h3>Cat Facts API</h3>
          <a href="https://catfact.ninja/" alt="catfacts">
            https://catfact.ninja/
          </a>
        </Row>
        <Row>
          <Row className="mt-3">
            <Col>
              <h5 className="fw-bold">Random Fact</h5>
              <p className="fs-5">• {catFacts.random}</p>
            </Col>
          </Row>
        </Row>
        <Row>
          <Row className="mt-5">
            <Col>
              <h5 className="fw-bold">Paginated List</h5>
              <div className="row">{catFacts.paginated.map(mapCatFacts)}</div>
            </Col>
          </Row>
        </Row>
        <Row className="mt-3 mb-3 text-center">
          <Col></Col>
          <Col>
            <Pagination
              onChange={onPaginationChange}
              current={pagination.currentPage}
              total={133}
              pageSize={10}
            />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Home;
