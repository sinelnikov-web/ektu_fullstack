import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const ToolbarDateTime = () => {
    const [initialized, setInitialized] = useState(false)
    const [year, setYear] = useState<string>('0')
    const [minutes, setMinutes] = useState<string>('0')
    const [hours, setHours] = useState<string>('0')
    const [seconds, setSeconds] = useState<string>('0')
    const [day, setDay] = useState<string>('0')
    const [month, setMonth] = useState<string>('0')

    const setCurrentDate = () => {
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear().toString()
        const currentMonth = currentDate.getMonth().toString()
        const currentDay = currentDate.getDay().toString()
        const currentHours = currentDate.getHours().toString()
        const currentMinutes = currentDate.getMinutes().toString()
        const currentSeconds = currentDate.getSeconds().toString()
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
        <ToolbarDateTimeStyled>
            <time dateTime={'20'}>
                <div className="datetime_time">
                    <span>{hours + ":" + minutes}</span>
                </div>
                <div className="datetime_date">
                    {day + '.' + month + '.' + year}
                </div>
            </time>
        </ToolbarDateTimeStyled>
    );
};

const ToolbarDateTimeStyled = styled.div`
  color: var(--white-color);
  text-align: center;
  padding: 0 0.5rem;
`

export default ToolbarDateTime;