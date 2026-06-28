import React, { Component } from "react";
import CalendarDays from "./CalendarDays";
import "./Calendar.scss"


export default class Calendar extends Component{
    constructor(props){
        super(props);
        this.state={
            active: this.props
        };

        this.weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ];
        this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        this.state = {
            currentDay: new Date()
        }
    }
    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number)});
    }
    render(){
        const { id, spisok } = this.props;
    
    
        return(
            <>
            <div className="calendar" >
            <h1 className="calendar__h1">Запись на {this.props.nameUslugi}</h1>
                <div className="calendar__header">
                    <h2 className="calendar__h2">{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                </div>
                <div className="calendar__body">
                    <div className="calendar__tableheader">
                        {
                            this.weekdays.map((weekday, index) => {
                                return(
                                    <div key={index}>
                                        <div className="calendar__weekday"><p className="calendar__p">{weekday}</p></div>
                                    </div>
                                    
                                ) 
                            })
                        }
                    </div>
                    <CalendarDays   day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}>
                    {this.props}
                    </CalendarDays>
                </div>
            </div>
            </>
        )
    }
}
                    
               

         

