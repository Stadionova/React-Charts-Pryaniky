import { dataCome } from './comeApi';
import { dataBorn } from './bornApi';
import { dataDie } from './dieApi';
import { dataLeave } from './leaveApi';

export function getDataComeYear() {
    return dataCome.dataYear;
}

export function getDataComeMonth() {
    return dataCome.dataMonth;
}

export function getDataComeDay() {
    return dataCome.dataDay;
}

export function getDataBornYear() {
    return dataBorn.dataYear;
}

export function getDataBornMonth() {
    return dataBorn.dataMonth;
}

export function getDataBornDay() {
    return dataBorn.dataDay;
}

export function getDataDieYear() {
    return dataDie.dataYear;
}

export function getDataDieMonth() {
    return dataDie.dataMonth;
}

export function getDataDieDay() {
    return dataDie.dataDay;
}

export function getDataLeaveYear() {
    return dataLeave.dataYear;
}

export function getDataLeaveMonth() {
    return dataLeave.dataMonth;
}

export function getDataLeaveDay() {
    return dataLeave.dataDay;
}