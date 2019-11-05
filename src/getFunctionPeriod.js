import { data } from './dataApi';
import { appear } from './appear';
import { die } from './die';
import { away } from './away';

export function getDataYear() {
    return data.dataYear;
}

export function getDataMonth() {
    return data.dataMonth;
}

export function getDataDay() {
    return data.dataDay;
}

export function getDataAppear() {
    return appear.dataYear;
}

export function getDataMonthAppear() {
    return appear.dataMonth;
}

export function getDataDayAppear() {
    return appear.dataDay;
}

export function getDataDie() {
    return die.dataYear;
}

export function getDataMonthDie() {
    return die.dataMonth;
}

export function getDataDayDie() {
    return die.dataDay;
}

export function getDataYearaway() {
    return away.dataYear;
}

export function getDataMonthaway() {
    return away.dataMonth;
}

export function getDataDayaway() {
    return away.dataDay;
}