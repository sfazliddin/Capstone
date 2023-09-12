import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Col, Row } from "react-bootstrap";
import { start } from "@popperjs/core";
const CalendarComponent = () => {
  const [time, setTime] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <div>
      <h1>Welcome to the calendar</h1>
      <Row>
        <Col>
          <div className="calendar-container">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              filterDate={isWeekday}
              placeholderText="Select a weekday"
              minDate={new Date()}
              inline
              showDisabledMonthNavigation
            />
          </div>
          <div>Selected date: {startDate}</div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
export default CalendarComponent;
