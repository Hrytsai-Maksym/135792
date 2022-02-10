// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// Объявлена функция getShippingCost(country)
// В теле функции использована инструкция switch
// Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
// Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
// Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
// Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
// Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
// Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"


function getShippingCost(country) {
    let message;
    // Change code below this line
    switch (country) { // Change this line
        case 'China': // Change this line
          message ='Shipping to China will cost 100 credits' ; // Change this line
          break;
    
          case 'Chile': // Change this line
          message ='Shipping to Chile will cost 250 credits' ; // Change this line
          break;

          case 'Australia': // Change this line
          message ='Shipping to Australia will cost 170 credits' ; // Change this line
          break;

        case 'Jamaica': // Change this line
          message ='Shipping to Jamaica will cost 120 credits' ; // Change this line
          break;
            
          default:message=
            'Sorry, there is no delivery to your country';
      }
    // Change code above this line
    return message;
  }
  

