import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Time from "../components/Time";

// import { Col, Row } from "react-bootstrap";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  // Define a function to disable weekends in the calendar.
  const tileDisabled = ({ date }) => isWeekend(date);
  return (
    <div className="app">
      <h1 className="header">Book an Appointment</h1>
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
          minDate={new Date()}
          tileDisabled={tileDisabled}
          minDetail="month"
        />
      </div>

      {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
      <Time showTime={showTime} date={date} />
    </div>
  );
};
export default CalendarComponent;
