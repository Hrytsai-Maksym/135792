// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение


// / function findLargestNumber(numbers) {
    //   let max = numbers[0];
    //   for (let number of numbers) {
    //     if (max < number) {
    //       max = number;
    //     }
    //   }
    //   return max;
    // }

    function findLongestWord(string) {
        // Change code below this line
      
     strings = string.split(" ");

     let longWord = string[0];

     for (let words of strings ) {

         if (longWord.length < words.length) {

            longWord = words;
         }
     }
         return longWord;
      }
      
