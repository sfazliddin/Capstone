import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1>Welcome to the calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>Selected date: {date.toDateString()}</div>
    </div>
  );
};
export default CalendarComponent;
