import { format, intervalToDuration } from 'date-fns';

export const formatFligthDate = (date, duration) => {
    const dur = intervalToDuration({
        start: new Date(date),
        end: new Date(new Date(date).getTime() + duration * 60000),
    });
    const minutes = dur.minutes === 0 ? '' : `${dur.minutes}M`;
    return `${dur.hours}Ч ${minutes}`;
};

export const priceFormatting = (number) => {
    const formatPrice = number.toString().split("").reverse()
        .reduce((agrigation, char, i) => {
            if (i % 3 === 0) {
                return agrigation + " " + char;
            }
            return agrigation + char;
        }, "P ");
    return formatPrice.split("").reverse().join('')
}

export function TransferTime(data, duration) {
    const startDate = format(new Date(data), 'HH:mm');
    const endDate = format(new Date(new Date(data).getTime() + duration * 60000), 'HH:mm');
    return `${startDate} - ${endDate}`;
}

export const formatTime = (time) => {
    return `${Math.trunc(time / 60)}ч ${time % 60}м`;
};

export const declensionOfName = (num) => {
    const textForms = ["ПЕРЕСАДКА", "ПЕРЕСАДКИ", "ПЕРЕСАДОК", "БЕЗ ПЕРЕСАДОК"];
    if (num >=4) {
        return `${num} ${textForms[2]}`
    } else if (num > 1 && num <= 4) {
        return `${num} ${textForms[1]}`
    } else if (num === 1) {
        return `${num} ${textForms[0]}`
    } else if (num === 0) {
        return `${textForms[3]}`
    }
}