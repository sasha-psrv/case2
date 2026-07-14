// Функция для преобразования цифры в отображение звёздочками
function digitToStars(digit) {
    const digits = {
        '0': `****\n*  *\n*  *\n*  *\n****`,
        '1': `  *\n  *\n  *\n  *\n  *`,
        '2': `****\n    *\n****\n*    \n****`,
        '3': `****\n    *\n****\n    *\n****`,
        '4': `*  *\n*  *\n****\n    *\n    *`,
        '4': `*  *\n*  *\n****\n    *\n    *`,
        '5': `****\n*    \n****\n    *\n****`,
        '6': `****\n*    \n****\n*  *\n****`,
        '7': `****\n    *\n  *\n *\n*`,
        '8': `****\n*  *\n****\n*  *\n****`,
        '9': `****\n*  *\n****\n    *\n****`
    };
    return digits[digit] || '';
}

// Функция для форматирования даты
function printBirthday(day, month, year) {
    const formattedDate = [
        day.toString().padStart(2, '0'),
        month.toString().padStart(2, '0'),
        year.toString()
    ].join(' ');

    const lines = formattedDate.split('').map(digit => digitToStars(digit).split('\n'));
    
    // Собираем строки табло
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push(lines.map(line => line[i]).join('  '));
    }
    
    console.log(result.join('\n'));
}

// Пример использования
printBirthday(14, 7, 2026);
