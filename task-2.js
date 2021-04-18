// Конвертувати строку в масив: https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
  let stringArray = [];
  let wordStart = 0;
  let word = '';
	for (let i = 0; i <= string.length; i++) {
    if (string.substring(i, i + 1) === ' ' || i === string.length) { // Якщо i дійшло до пробілу, або до кінця строки
      word = string.substring(wordStart, i);
      stringArray.push(word);
      wordStart = i + 1;
    }
  }
  return stringArray;
}

// Заміна літер у рядку: https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  for (let i = 0; i <= dna.length; i++) {
    if (dna.substring(i, i + 1) === 'T') {
      dna = dna.substring (0, i) + 'U' + dna.substring (i + 1);
    }
  }
  return dna;
}

// Знаходження найбільшого і найменшого числа: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

let min = function(list){
    let minimal = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] < minimal) {
        minimal = list[i];
      }
    }
  return minimal;
}

let max = function(list){
    let maximum = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] > maximum) {
        maximum = list[i];
      }
    }
  return maximum;
}

// Виведення індексу або значення мінімального числа (НЕ ПРАЦЮЄ): https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let minim = arr[0];
  let minimIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minim) {
      if (toReturn === 'value') {
        minim = arr[i];
      }
      if (toReturn === 'index') {
        minimIndex = i;
      }
    }
  }
  if (toReturn === 'index') {
    return minimIndex;
  }
  return minim;
}
