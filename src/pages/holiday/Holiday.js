import Dropdown from "react-bootstrap/Dropdown";
import "./Holiday.css";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Holiday() {
  const [holidays, setHolidays] = useState([]);
  const [pickedDate, setPickedDate] = useState("");
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const selectedDateRef = useRef(null); // Ref to keep track of the selected date

  useEffect(() => {
    // Convert holidays to events format
    const holidayEvents = holidays.map((holiday, index) => ({
      title: `Holiday ${index + 1}`,
      start: holiday, // Assuming holidays are in date format, adjust as needed
      backgroundColor: "orangered",
      borderColor: "orangered", // Adjust background color as needed
    }));
    setEvents(holidayEvents);
  }, [holidays]);

  console.log(events);

  const handleDateClick = (info) => {
    setPickedDate(info.dateStr);
    console.log("Clicked on: " + info.dateStr);
    selectedDateRef.current = info.dateStr; // Store the selected date
    calendarRef.current.getApi().render(); // Re-render the calendar
  };

  const renderEventContent = (eventInfo) => {
    if (holidays.includes(pickedDate)) {
      return (
        <>
          <span style={{ fontSize: "10px" }}>Selected Date</span>
          <br />
          {eventInfo.dayNumberText}
        </>
      );
    } else {
      return <>{eventInfo.dayNumberText}</>;
    }
  };

  const addHolidays = () => {
    setHolidays([...holidays, pickedDate]);
  };

  console.log(holidays);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ color: "black", marginBottom: "20px" }}>
          Holiday Calendar
        </h3>
        <div style={{ display: "grid", textAlign: "center", color: "black" }}>
          <i
            class="fa fa-user-o"
            aria-hidden="true"
            style={{ fontSize: "x-large" }}
          ></i>
          <span>Admin</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Dropdown style={{ marginRight: "10px" }}>
            <Dropdown.Toggle className="btn-admin">Department</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Department1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Department2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Department3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle className="btn-admin">Timeperiod</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Timeperiod1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Timeperiod2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Timeperiod3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <Button
            style={{ backgroundColor: "orangered", borderColor: "orangered" }}
            onClick={addHolidays}
          >
            <i
              class="fa fa-plus-circle"
              aria-hidden="true"
              style={{ paddingRight: "3px" }}
            ></i>
            Add Holiday
          </Button>
        </div>
      </div>

      <div
        style={{
          border: "2px solid #dddddd",
          marginTop: "10px",
          color: "#2c3e50",
        }}
      >
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "prev",
            center: "title",
            end: "next",
          }}
          height={"70vh"}
          dateClick={handleDateClick}
          // eventContent={renderEventContent}
          events={events} // Pass events as props to FullCalendar
          dayCellDidMount={(cell) => {
            // Add event content to each day cell
            console.log(cell.date);
            const date = new Date(cell.date);
            const formattedDate = date.toISOString().split("T")[0];
            console.log(formattedDate);
            if (holidays.includes(formattedDate)) {
              cell.el.innerHTML = renderEventContent({
                dateStr: cell.date,
                dayNumberText: cell.dayNumberText,
              });
            }
          }}
        />
      </div>
    </>
  );
}

export default Holiday;
