function getDayOfWeek(day, month, year) {
    const days = ["Понедельник", "Вторник", "Среда", 
                 "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const date = new Date(year, month - 1, day);
    
    if (isNaN(date)) {
        return "Неверная дата";
    }
    return days[date.getDay()];
}

// Пример использования
console.log(getDayOfWeek(14, 7, 2026));  // Вторник
