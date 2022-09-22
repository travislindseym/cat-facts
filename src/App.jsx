// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Home></Home>
      </Container>
    </React.Fragment>
  );
}

export default App;
