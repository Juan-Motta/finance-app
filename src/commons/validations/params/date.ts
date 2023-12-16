import { NextRequest } from "next/server";

function _getDate30DaysBefore() {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date;
}

function _getDateNow(): Date {
    return new Date();
}

function _isValidDateFormat(date: string) {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3}Z)?$/;
    return regex.test(date);
}

function _validateDate(date: string | null | undefined, callback: Function) {
    if (!date) {
        return callback();
    }
    if (_isValidDateFormat(date)) {
        return new Date(date);
    }
    throw new Error(
        `Parameter ${date} is not a valid format date, it must be YYYY-MM-DDThh:mm:ss`
    );
}

function validateDateParams(
    fromDateParam: string | null | undefined,
    toDateParam: string | null | undefined
): validateFromDateParamResponse {
    const from = _validateDate(fromDateParam, _getDate30DaysBefore);
    const to = _validateDate(toDateParam, _getDateNow);
    if (from >= to) {
        throw new Error("from date is greater than to date");
    }
    return { from, to };
}

export { validateDateParams };
