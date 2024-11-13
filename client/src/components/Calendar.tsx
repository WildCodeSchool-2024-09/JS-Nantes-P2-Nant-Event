import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles.css/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="calendarcontainer">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default MyCalendar;
