import { useState } from "react";
import "./CalendarDays.scss"
import TimeSlots from "./TimeSlots";
import Modal from "../Modal/Modal";


const CalendarDays = (props) => {

  // Получаем первый день месяца для текущей даты, переданной в props
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  // Определяем день недели для первого дня месяца (0 - воскресенье, 1 - понедельник и т.д.)
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];
  // Получаем текущую дату, устанавливаем день на 0, чтобы перейти на последний день предыдущего месяца.
  // Это используется для определения, является ли день в прошлом.
  const today = new Date();
  today.setDate(0);

  const currentDate = new Date();
  console.log(currentDate);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const[proPS, setProPS] = useState(null)

  const handleDayClick = (day) => {
    setProPS(props)
    setSelectedDay(day);
    setShowTimeSlots(true);
  };

  const handleCloseTimeSlots = () => {
    setShowTimeSlots(false);
  };

  const updateSelectedDay = (newDay) => {
    setSelectedDay(newDay);
    props.changeCurrentDay(newDay);
    setShowTimeSlots(false);
  };


  // Генерируем 42 дня для полного отображения сетки календаря (6 недель * 7 дней)
  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      // Если первый день месяца - воскресенье, смещаем на неделю назад
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      // Смещаем на количество дней, соответствующее дню недели первого дня месяца, чтобы начать с нужного дня
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      // Добавляем по одному дню для остальных ячеек
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const calendarDay = {
      id: NaN,
      // Проверяем, соответствует ли месяц текущему месяцу из props. Обратите внимание: month + 1 для корректного отображения
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth() +1,
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
      isPastDay: firstDayOfMonth < today,
      //isPastDay: firstDayOfMonth < currentDate,
    };
    
    currentDays.push(calendarDay);
    
  }

  return (
    <>
    <div className="table">
      {currentDays.map((day, index) => {
        day.id = index
        const isClickable = day.currentMonth && !day.isPastDay;
        day.date.setDate(day.date.getDate() + 1)
        day.isActive = day.currentMonth && day.date >= currentDate;
        day.isActiveNumber = day.number && day.date >= currentDate;

        return (
          <div
            key={index}
            className={`table__calendar-day ${day.currentMonth ? 'table__current' : ''} ${day.selected ? 'table__selected'  : ''} ${day.isActive ? 'active' : 'non'}`}
            onClick={() => isClickable && handleDayClick(day)}
            style={{ cursor: isClickable ? 'pointer' : 'default' }}
          >
            <p className={`table__p ${day.isActiveNumber ? 'table__p' : 'table__pno'}`}>{day.number}</p>
            {!selectedDay && day.isActive && showTimeSlots && (
              <TimeSlots  key={day} {...props.children} />
            )}
            </div>
        );
      })}
    </div>
    {selectedDay && showTimeSlots && (
      <Modal
      active={showTimeSlots} 
      setActive={setShowTimeSlots}
      children={<TimeSlots selectedDayClic={selectedDay} setChildren={proPS} {...props.children}/>}
      />
      
    )}
    </>
  );
}


export default CalendarDays;