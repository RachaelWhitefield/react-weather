import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap"; 
import moment from "moment";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
// import sampleData from "./data/sample.json";
import API from "./utils/API";

const App = () => {
  const [day, setDay] = useState("Monday");
  const [data, setData] = useState({
    days: [],
    location: "",
    selectedDay: null,
    searchTerm: ""
  });
  const{ days, location, selectedDay, searchTerm } = data;

  // only on initial render, trigger getWeather with Denver, CO
  useEffect(() => {
    // write code that we want to execute at a certain part of the life cycle
   getWeather("Denver, CO"); // can code this later to be user's current location.  2:58:38
  }, []);

  // change the title of the page based on search term and change based on every search
  useEffect(() => {
    document.title = `This week's weather ${location ? "for " + location : ""}`;
  }, [location]);

  const getWeather = city => {
    API.getWeather(city)
    .then(res => {
      console.log(res);
      setData({
        searchTerm: "",
        selectedDay: null,
        days: res.data.data,
        location: res.data.city_name + ", " + res.data.state_code
      })
    })
    .catch(err => console.log(err));
  }

  const setSelectedDay = day => {
    setData({
      ...data, // copy in the exitsting state so we don't lose it
      selectedDay: day  // add our change on top of it
    });
  }

  const handleInputChange = event => {
    setData({
      ...data,
      searchTerm: event.target.value
    });
  }

  // Make sure the page doesn't refresh
  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      getWeather(searchTerm);
    } else {
      alert("You must type a city to search");
    }
  }

  return (
    <Container>
      <Row>
        <Col md={8}><h1>Weather for {location}</h1></Col>
        <Col md={4}><SearchBar 
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
        </Col>
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
