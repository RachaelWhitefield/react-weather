import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap"; 
import moment from "moment";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import sampleData from "./data/sample.json";

const App = () => {
  const [day, setDay] = useState("Monday");
  const [data, setData] = useState({
    days: sampleData.data,
    location: "Denver, CO",
    selectedDay: null,
    searchTerm: ""
  });
  const{days, location, selectedDay, searchTerm} = data;

  return (
    <Container>
      <Row>
        <Col md={8}><h1>Weather for {location}</h1></Col>
        <Col md={4}><SearchBar /></Col>
      </Row>
      <Row>
       {days.map(day => (
         <DayCard 
            key={day.ts}
            day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
            current={day.temp}
            high={day.max_temp}
            low={day.min_temp}
            icon={day.weather.icon}
            description={day.weather.description}
         />
       ))}
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
