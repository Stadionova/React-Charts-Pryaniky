import { dataCome } from './comeApi';
import { dataBorn } from './bornApi';
import { dataDie } from './dieApi';
import { dataLeave } from './leaveApi';

export function getDataYear() {
    return dataCome.dataYear;
}

export function getDataMonth() {
    return dataCome.dataMonth;
}

export function getDataDay() {
    return dataCome.dataDay;
}

export function getDataAppear() {
    return dataBorn.dataYear;
}

export function getDataMonthAppear() {
    return dataBorn.dataMonth;
}

export function getDataDayAppear() {
    return dataBorn.dataDay;
}

export function getDataDie() {
    return dataDie.dataYear;
}

export function getDataMonthDie() {
    return dataDie.dataMonth;
}

export function getDataDayDie() {
    return dataDie.dataDay;
}

export function getDataYearaway() {
    return dataLeave.dataYear;
}

export function getDataMonthaway() {
    return dataLeave.dataMonth;
}

export function getDataDayaway() {
    return dataLeave.dataDay;
}