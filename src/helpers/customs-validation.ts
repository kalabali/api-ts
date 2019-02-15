import { CustomValidator } from 'express-validator/check';

const validateYearRange: CustomValidator = (year: number) => {
    return year >= 1600 && year <= 3000;
}

const validateMonthRange: CustomValidator = (month: number) => {
    return month >= 1 && month <= 12;
}

export {
    validateYearRange,
    validateMonthRange
}