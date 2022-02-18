// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, 
// но необязательно, цикл for...of.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of


function countProps(object) {
    // Change code below this line
    let propCount = 0;

    const objects = Object.keys(object);
    
  for (const key of objects ){
    propCount ++;
  
    return propCount;
    // Change code above this line
  }

  }
  

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }