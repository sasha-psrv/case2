// Функция для получения даты рождения
function getBirthday() {
    const day = parseInt(prompt("Введите день рождения (число): "), 10);
    const month = parseInt(prompt("Введите месяц рождения (число): "), 10);
    const year = parseInt(prompt("Введите год рождения (четыре цифры): "), 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Ошибка: введите числовые значения");
        return;
    }

    if (day >= 1 && day <= 31 && 
        month >= 1 && month <= 12 && 
        year >= 1800 && year <= 2026) {
        
        console.log(`Ваша дата рождения: ${String(day).padStart(2, '0')}.` +
                   `${String(month).padStart(2, '0')}.${year}`);
    } else {
        alert("Ошибка: неверная дата");
    }
}

getBirthday();


