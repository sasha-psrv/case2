function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    // Корректировка возраста
    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    return age;
}

// Пример использования
console.log(calculateAge(2000, 5, 15));  // Возвращает возраст в годах
