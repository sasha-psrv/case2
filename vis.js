function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Пример использования
console.log(isLeapYear(2024));  // true
