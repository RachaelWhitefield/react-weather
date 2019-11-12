import React from 'react';
import { Container, Row, Col } from "reactstrap"; 
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import sampleData from "./data/sample.json";

function App() {
  return (
    <Container>
      <Row>
        <Col md={8}><h1>Weather for Somewhere</h1></Col>
        <Col md={4}><SearchBar /></Col>
      </Row>
      <Row>
        <Col>
          <DayCard /><DayCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <DayDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
