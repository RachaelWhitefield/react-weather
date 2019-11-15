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

  const setSelectedDay = day => {
    setData({
      ...data, // copy in the exitsting state so we don't lose it
      selectedDay: day  // add our change on top of it
    });
  }

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
            setSelectedDay={() => setSelectedDay(day)}
            isActive={day === selectedDay}
         />
       ))}
      </Row>
      <Row>
        <Col>
          {selectedDay ? (
               <DayDetails
               day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY")}
               current={selectedDay.temp}
               high={selectedDay.max_temp}
               low={selectedDay.min_temp}
               icon={selectedDay.weather.icon}
               description={selectedDay.weather.description}
               windSpeed={selectedDay.wind_spd}
               windDir={selectedDay.wind_cdir_full}
               precip={selectedDay.pop}
             />
          ) : (
            <h3>Click on a day above to get weather details!</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
