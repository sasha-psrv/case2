
// Функция определения дня недели
function getDayOfWeek(year, month, day) {
    const date = new Date(year, month - 1, day);
    return date.getDay();
}
// Функция определения високосного года
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// Функция расчета возраста
function calculateAge(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

// Пример вывода даты в формате электронного табло
function printDate(day, month, year) {
    // Реализация вывода звёздочками
  function printDate(day, month, year) {
    const date = `${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year}`;
    console.log(date.split('').map(digit => {
        switch(digit) {
            case '0': return '****\n*   *\n*   *\n*   *\n****';
            case '1': return '   *\n   *\n   *\n   *\n   *';
            // Остальные цифры по аналогии
        }
    }).join('\n'));
}
