// Генерация рандомного числа
export function randomNumber(maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber) + 1;
  return randomNum;
}

// Генерация уникального ключа для коллекций
export function newKey() {
  const datePart = new Date().getTime().toString(); // Метка времени в виде строкового представления
  const randomPart = Math.random().toString().substr(2, 5); // Случайная часть
  const uniqueId = datePart + randomPart;
  return uniqueId;
}
