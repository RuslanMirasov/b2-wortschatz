// Генерация рандомного числа
export function randomNumber(maxNumber, blacklistNumber) {
  let randomNum = Math.floor(Math.random() * maxNumber) + 1;
  do {
    randomNum = Math.floor(Math.random() * maxNumber) + 1;
  } while (blacklistNumber && randomNum === blacklistNumber);
  return randomNum;
}

// Генерация уникального ключа для коллекций
export function newKey() {
  const datePart = new Date().getTime().toString(); // Метка времени в виде строкового представления
  const randomPart = Math.random().toString().substr(2, 5); // Случайная часть
  const uniqueId = datePart + randomPart;
  return uniqueId;
}

// Выделение ключевых слов в тексте жирным
export function markImportantWords(text, words) {
  const wordsSet = new Set(words.map(word => word.toLowerCase())); // Создаем множество слов в нижнем регистре
  const wordsArray = text.split(/\b/); // Разбиваем текст на массив слов

  const emphasizedText = wordsArray
    .map(word => {
      const normalizedWord = word.toLowerCase();
      if (wordsSet.has(normalizedWord)) {
        return `<b>${word}</b>`; // Выделяем жирным шрифтом
      } else {
        return word;
      }
    })
    .join('');
  return emphasizedText;
}

//Генерация аватарок
export function avatar() {
  let avatar1 = Math.floor(Math.random() * 6) + 1;
  let avatar2 = Math.floor(Math.random() * 6) + 1;
  while (avatar2 === avatar1) {
    avatar2 = Math.floor(Math.random() * 6) + 1;
  }
  return [avatar1, avatar2];
}
