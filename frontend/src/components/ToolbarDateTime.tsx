import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Calendar from "./Calendar";
import {currentTime} from "../utils/calendar";

const ToolbarDateTime = () => {
    const [initialized, setInitialized] = useState(false)
    const [year, setYear] = useState<string>('0')
    const [minutes, setMinutes] = useState<string>('0')
    const [hours, setHours] = useState<string>('0')
    const [seconds, setSeconds] = useState<string>('0')
    const [day, setDay] = useState<string>('0')
    const [month, setMonth] = useState<string>('0')
    const [date, setDate] = useState<Date>(new Date(Date.now()))
    const [showCalendar, setShowCalendar] = useState(false)

    const setCurrentDate = () => {

        const {
            currentYear,
            currentMonth, currentDay,
            currentHours, currentMinutes, currentSeconds
        } = currentTime()

        setYear(currentYear)
        setDay(currentDay.length === 2 ? currentDay : '0' + currentDay)
        setMonth(currentMonth.length === 2 ? currentMonth : '0' + currentMonth)
        setMinutes(currentMinutes.length === 2 ? currentMinutes : '0' + currentMinutes)
        setHours(currentHours.length === 2 ? currentHours : '0' + currentHours)
        setSeconds(currentSeconds.length === 2 ? currentSeconds : '0' + currentSeconds)
        setInitialized(true)
    }

    useEffect(() => {

        if (!initialized) {
            setCurrentDate()
        } else {
            setTimeout(() => {
                setCurrentDate()
            }, 1000)
        }
    }, [seconds])

    return (
        <ToolbarDateTimeStyled className={'toolbar-datetime'}>
            <div className="toolbar-icon-wrapper">
                <time tabIndex={0} onKeyUp={(e) => e.code === 'Enter' ? setShowCalendar(!showCalendar) : null}
                      className={'toolbar-icon'} dateTime={'20'} onClick={() => setShowCalendar(prev => !prev)}>
                    <div className="datetime_time">
                        <span>{hours + ":" + minutes}</span>
                    </div>
                    <div className="datetime_date">
                        {day + '.' + month + '.' + year}
                    </div>
                </time>
            </div>
            {showCalendar && <Calendar date={date} hours={hours} minutes={minutes} seconds={seconds}/>}
        </ToolbarDateTimeStyled>
    );
};

const ToolbarDateTimeStyled = styled.div`
  color: var(--white-color);
  text-align: center;
  width: 100%;
  height: 100%;

  .toolbar-icon-wrapper {
    padding: 0.5rem 0.5rem;
    width: 100%;
    height: 100%;

    &:hover {
      background-color: var(--toolbar-bg-color);
      filter: brightness(140%);
    }
  }
`

export default ToolbarDateTime;