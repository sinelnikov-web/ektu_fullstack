// @ts-ignore
import uuid from 'react-uuid'
import {DayType} from "../components/Calendar";

export function getMonthOffsetList(date: Date) {
    let monthlist: Array<number> = []
    for (let i = 0; i < 12; i++) {
        const curDate = new Date(date.getFullYear(), i, 0).getDate()
        const firstDay = new Date(date.getFullYear(), i - 1, 1).getDay()
        if (i === 0) {
            monthlist.push(0)
        } else {
            if (curDate === 31 && [5, 6, 0].includes(firstDay)) {
                monthlist.push(monthlist[i - 1] + 200)
            } else if (curDate === 30 && [6, 0].includes(firstDay)) {
                monthlist.push(monthlist[i - 1] + 200)
            } else {
                monthlist.push(monthlist[i - 1] + 160)
            }
        }
    }
    return monthlist
}


export function getDayList(date: Date) {
    let dayList: Array<Array<DayType>> = []
    let week = 0
    dayList.push([])
    for (let i = 0; i < 12; i++) {
        for (let j = 1; j <= new Date(date.getFullYear(), i + 1, 0).getDate(); j++) {
            let day = {
                id: uuid(),
                dayNumber: j,
                dayNameNumber: new Date(date.getFullYear(), i, j).getDay(),
                monthNumber: i
            }
            if (dayList[week].length === 0 && day.dayNameNumber !== 1) {
                if (day.dayNameNumber === 0) {
                    for (let k = 1; k < 6; k++) {
                        dayList[week].push({
                            id: uuid(),
                            dayNameNumber: k,
                            dayNumber: 0,
                            monthNumber: i
                        })
                    }
                } else {
                    for (let k = 0; k < day.dayNameNumber - 1; k++) {
                        dayList[week].push({
                            id: uuid(),
                            dayNameNumber: k,
                            dayNumber: 0,
                            monthNumber: i
                        })
                    }
                }
            }
            if (dayList[week].length < 7) {
                dayList[week].push(day)
            } else {
                week++
                dayList.push([day])
            }

        }
    }
    return dayList
}


export function currentTime() {
    const currentDate = new Date(Date.now())
    const currentYear = currentDate.getFullYear().toString()
    const currentMonth = (currentDate.getMonth() + 1).toString()
    const currentDay = currentDate.getDate().toString()
    const currentHours = currentDate.getHours().toString()
    const currentMinutes = currentDate.getMinutes().toString()
    const currentSeconds = currentDate.getSeconds().toString()

    return {currentDate, currentYear, currentMonth, currentDay, currentHours, currentMinutes, currentSeconds}
}