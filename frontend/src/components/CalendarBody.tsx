import React from 'react';
import {DayType} from "./Calendar";
import {ActivityType} from "../api/activities-api";

interface CalendarBodyProps {
    dayList: Array<Array<DayType>>
    region: string
    activeDay: Date
    activities: Array<ActivityType>,
    onDayClick: (value: Date) => void
}

const CalendarBody: React.FC<CalendarBodyProps> = ({dayList, activeDay, activities, onDayClick , region}) => {
    const date = new Date()
    return (
        <>
            {dayList?.map((week, index) => {
                return (
                    <div key={index} className="calendar__table-row">
                        {week.map(day => {
                            if (day.dayNumber) {
                                const currentDate = new Date(date.getFullYear(), day.monthNumber, day.dayNumber, 12)
                                const isActive = currentDate.toISOString() === activeDay.toISOString()
                                const equalDates = activities.filter(activity => activity.date.split('T')[0] === currentDate.toISOString().split('T')[0] && activity.region === region)
                                const equalExist = equalDates.length !== 0

                                return (
                                    <div tabIndex={0} onClick={() => onDayClick(currentDate)}
                                         key={day.id}
                                         className={"calendar__table-item" + (equalExist ? ' active' : '') + (isActive ? ' selected' : '')}
                                    >

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
        </>
    );
};

export default CalendarBody;