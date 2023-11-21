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
  const datePart = new Date().getTime().toString();
  const randomPart = Math.random().toString().substr(2, 5);
  const uniqueId = datePart + randomPart;
  return uniqueId;
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

// Перетасовка массива
export function mixArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Получение массива символов из текста
export function getLetters(text) {
  const characters = text.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters;
}
