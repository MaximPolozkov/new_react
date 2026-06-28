import React, { useState } from "react";
import "./TimeSlots.scss";
import { useNavigate } from "react-router-dom";

const TimeSlots = ({times, selectedDayClic, setChildren}) => {
 selectedDayClic.date.setDate(selectedDayClic.date.getDate() - 1)
 
  const [modalActiveTime, setModalActiveTime] = useState(null);

  const navigate = useNavigate();
  

  const generateTimeSlots = () => {
    const slots = [];
    let currentTime = new Date(selectedDayClic.date);
    currentTime.setHours(9, 0, 0, 0); // Устанавливаем начальное время 9:00
    const end = new Date(selectedDayClic.date);
    end.setHours(19, 0, 0, 0); // Устанавливаем конечное время 19:00

    while (currentTime < end) {
      if (!isBreakTime(currentTime)) {
        slots.push(currentTime.toISOString());
        // slots.push(new Date(currentTime));
        //slots.push(selectedDayClic);
        console.log("slots", slots);
      }
      currentTime.setMinutes(currentTime.getMinutes() + (times));
    }

    return slots;
  };

  const isBreakTime = (time) => {
    if (!times.breaks || !Array.isArray(times.breaks)) {
      return false;
    }

    return times.breaks.some(breakTime => {
      const [breakStartHour, breakStartMinute] = breakTime.start.split(':').map(Number);
      const [breakEndHour, breakEndMinute] = breakTime.end.split(':').map(Number);
      
      const breakStart = new Date(time);
      breakStart.setHours(breakStartHour, breakStartMinute, 0, 0);
      
      const breakEnd = new Date(time);
      breakEnd.setHours(breakEndHour, breakEndMinute, 0, 0);

      return time >= breakStart && time < breakEnd;
    });
  };

  const formatTime = (date) => {
    const dates =new Date(date)
    return dates.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleTimeClick = (slot) => {
    setModalActiveTime(slot);
    
    navigate('/AvatarKabinet', {
            state: {
                nameUslugi: setChildren.children.nameUslugi,
                name: setChildren.children.trans.name, 
                firstname: setChildren.children.trans.firstname,
                midle: setChildren.children.trans.midle,
                img: setChildren.children.trans.img,
                number: selectedDayClic.number,
                month: selectedDayClic.month,
                year: selectedDayClic.year,
                time: formatTime(slot),
            }
            
         });
  };

  const timeSlots = generateTimeSlots();
  return (
    <div className="time">
      {timeSlots.map((slot, index) => (
        <div
          key={index}
          className={`time__time-slot ${modalActiveTime === slot ? "active" : ""}`}
          onClick={() => handleTimeClick(slot)}
          style={{ cursor: "pointer" }}
        >
          <p>{formatTime(slot)}</p>
        </div>
      ))}
    </div>
   
  );
};

export default TimeSlots;