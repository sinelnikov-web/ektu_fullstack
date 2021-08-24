import React, {useState} from 'react';
import styled from "styled-components";
import CalendarIcon from "../assets/images/calendar.svg"
// @ts-ignore
import uuid from 'react-uuid'
import {getDayList, getMonthOffsetList} from "../utils/calendar";
import {useSelector} from "react-redux";
import {activitiesSelector} from "../selectors/activities-selectors";

interface CalendarProps {
    hours: string
    minutes: string
    seconds: string
    date: Date
}

export type DayType = {
    id: string
    dayNumber: number
    dayNameNumber: number
    monthNumber: number
}

const Calendar: React.FC<CalendarProps> = ({
                                               hours, minutes,
                                               seconds, date
                                           }) => {

    const activities = useSelector(activitiesSelector)
    const [dayList, setDayList] = useState<Array<Array<DayType>>>(() => getDayList(date))
    const [currentMonth, setCurrentMonth] = useState(date.getMonth())
    const [monthOffset, setMonthOffset] = useState<Array<number>>(() => getMonthOffsetList(date))
    const [activeDay, setActiveDay] = useState(new Date(date.getFullYear(), date.getMonth(), date.getDay(), 12))

    const dayNamesMap = [
        'Воскресенье', 'Понедельник', 'Вторник',
        'Среда', 'Четверг',
        'Пятница', 'Суббота',
    ]
    const monthNamesMap = [
        'Январь', 'Февраль',
        'Март', 'Апрель',
        'Май', 'Июнь',
        'Июль', 'Август',
        'Сентябрь', 'Октябрь',
        'Ноябрь', 'Декабрь',
    ]

    const nextMonth = () => {
        if (currentMonth !== 11) {
            setCurrentMonth(prev => prev + 1)
        }
    }

    const prevMonth = () => {
        if (currentMonth !== 0) {
            setCurrentMonth(prev => prev - 1)
        }
    }
    const onDayClick = (selectedDayDate: Date) => {
        setActiveDay(selectedDayDate)
    }

    const activeDayData = activities.filter(activity => activity.date.split('T')[0] === activeDay.toISOString().split('T')[0])

    return (
        <CalendarStyled className={'calendar popup'} currentMonth={currentMonth}
                        monthOffset={monthOffset[currentMonth]}>
            <div className="calendar__head">
                <time dateTime={'2021-08-14'}>
                    <div className="calendar__time">
                        <span>{hours}:{minutes}:{seconds}</span>
                    </div>
                    <div className="calendar__date">
                        <span>{dayNamesMap[date.getDay()]}, {date.getDate()} августа {date.getFullYear()} год</span>
                    </div>
                </time>
            </div>
            <div className="calendar__body">
                <div className="calendar__top">
                    <h2 className="calendar__title">{monthNamesMap[currentMonth]} {date.getFullYear()} г.</h2>
                    <div className="calendar__controls">
                        <button className="calendar-up" onClick={prevMonth}></button>
                        <button className="calendar-down" onClick={nextMonth}></button>
                    </div>
                </div>
                <div className="calendar__bottom">
                    <div className="calendar__table">
                        <div className="calendar__table-head">
                            <div className="calendar__table-row">
                                <div className="calendar__table-item">
                                    <span>пн</span>
                                </div>
                                <div className="calendar__table-item">
                                    <span>вт</span>
                                </div>
                                <div className="calendar__table-item">
                                    <span>ср</span>
                                </div>
                                <div className="calendar__table-item">
                                    <span>чт</span>
                                </div>
                                <div className="calendar__table-item">
                                    <span>пт</span>
                                </div>
                                <div className="calendar__table-item">
                                    <span>сб</span>
                                </div>
                                <div className="calendar__table-item">
                                    <span>вс</span>
                                </div>
                            </div>
                        </div>
                        <div className="calendar__table-body">
                            {dayList?.map((week, index) => {
                                return (
                                    <div key={index} className="calendar__table-row">
                                        {week.map(day => {
                                            if (day.dayNumber) {
                                                const currentDate = new Date(date.getFullYear(), day.monthNumber, day.dayNumber, 12)
                                                const isActive = currentDate.toISOString() === activeDay.toISOString()
                                                const equalDates = activities.filter(activity => activity.date.split('T')[0] === currentDate.toISOString().split('T')[0])
                                                const equalExist = equalDates.length !== 0

                                                return (
                                                    <div tabIndex={0} onClick={() => onDayClick(currentDate)}
                                                         key={day.id}
                                                         className={"calendar__table-item" + (equalExist ? ' active' : '') + (isActive ? ' selected' : '')}>
                                                        <span>{day.dayNumber}</span>
                                                    </div>
                                                )
                                            }
                                            return (
                                                <div key={day.id} className="calendar__table-item">
                                                    <span></span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="calendar__footer">
                <div className="calendar__top">
                    <h2 className="calendar__title">
                        {dayNamesMap[activeDay.getDay()]} {activeDay.getDate()} {monthNamesMap[activeDay.getMonth()]}
                    </h2>
                </div>
                <div className="calendar__activity">
                    <img src={CalendarIcon} alt="" className="calendar__activity-image"/>
                    <p className="calendar__activity-description">
                        {activeDayData.length !== 0 ? activeDayData[0].description : 'Мероприятий на этот день нет.'}
                    </p>
                </div>
            </div>
        </CalendarStyled>
    );
};

interface CalendarStyledProps {
    currentMonth: number
    monthOffset: number
}

const CalendarStyled = styled.div<CalendarStyledProps>`
  position: absolute;
  top: -1400%;
  right: 0;
  width: 360px;
  height: 700px;
  background-color: #233339;

  .calendar__head {
    text-align: left;
    padding: 1.5rem 3.4rem;

    .calendar__time {
      font-size: 4.2rem;
      font-weight: 300;
    }

    .calendar__date {
      color: #71d0f6;
    }
  }

  .calendar__top {
    margin-bottom: 0.8rem;
  }

  .calendar__title {
    padding-left: 1.4rem;
    font-weight: 300;
    font-size: 1.6rem;
  }

  .calendar__body {
    padding: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .calendar__top {
    display: flex;
    justify-content: space-between;
  }

  .calendar__table {
    height: 28rem;
    overflow: hidden;
  }

  .calendar__table-head {
    position: relative;
    z-index: 20;
  }

  .calendar__controls {
    display: flex;
    gap: 1rem;

    button {
      border: none;
      background: transparent;
      color: var(--white-color);
      width: 30px;
      height: 20px;
      position: relative;

      &:hover {
        &:after {
          border-color: rgba(255, 255, 255, 0.8);
        }
      }
    }

    .calendar-up:after, .calendar-down:after {
      content: '';
      position: absolute;
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      border-right: 1px solid rgba(255, 255, 255, 0.4);
      width: 15px;
      height: 15px;
      top: 50%;
      left: 30%;
      transform: translate(0, -50%);
    }

    .calendar-up:after {
      transform: rotate(-45deg);
    }

    .calendar-down:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  .calendar__table-row {
    display: flex;
  }

  .calendar__table-item {
    width: 48px;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #233339;

    &.active {
      border: 1px solid red;
    }

    &.selected {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    &.other-month {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  .calendar__table-body {
    position: relative;
    transition: all 0.3s linear;
    top: -${props => props.monthOffset}px;

    .calendar__table-item:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  .calendar__footer {
    padding: 1.5rem 2.4rem;

    .calendar__activity {
      padding: 1.5rem;
      display: flex;
    }

    .calendar__activity-image {
      width: 28px;
      height: 28px;
      margin-right: 2rem;
    }

    .calendar__activity-description {
      text-align: left;
      max-height: 160px;
      overflow-y: auto;
    }
  }

  @media (max-width: 823px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 5rem);
    overflow-y: auto;
    .calendar__top {
      max-width: 336px;
      margin: 0 auto;
    }

    .calendar__bottom {
      display: flex;
      justify-content: center;
    }
  }
`

export default Calendar;