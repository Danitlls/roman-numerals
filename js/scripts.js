// var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
// var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];




var one = "I";
var five = "V";
var ten = "X";
var fifty = "L";
var hundred = "C";
var fiveHundred = "D";
var thousand = "M";

// var singleCharacters = function(number){
//   if (number == 0){
//   return " ";
// } else if (number == 1){
//     return one;
//   } else if (number == 2){
//     return one + one;
//   } else if (number == 3){
//     return one + one + one;
//   } else if (number == 4){
//     return one + five ;
//   } else if (number == 5){
//     return five ;
//   } else if (number == 6){
//     return five + one;
//   } else if (number == 7){
//     return five + one + one;
//   } else if (number == 8){
//     return five + one + one + one;
//   } else if (number == 9){
//     return one + ten ;
//   }
// }
var splitUserInput = [];

// var makeArray = function(number1){
// splitUserInput = number1.split("");
// numberArray11111111.push(splitUserInput);
// console.log(numberArray);
// }

var numerals = ["", "I", "II", "III", "IV", "V", "VI","VII", "VIII", "IX"];
var numbers = [0, 1, 2, 3, 4, 5, 6,7, 8, 9];
var numberArray = [];

var someFunc = function(input) {
  // makeArray();
for(var index = 0; index < numbers.length; index += 1){
  // if (numbers[index] === input){
  //   numberArray.push(numerals[numbers[index]]);
  // }

  if (numbers[index] === input){
    numberArray.push(numerals[numbers[index]]);
    console.log(numberArray);
  }

  // else{
  //
  // }
};
// return newArray.join()
  return numberArray;

}

// -------------------------------------------------

$(document).ready(function(){
  $("#roman-numeral").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#userNumber").val());
    var output = someFunc(userInput);



    $("#result").text(output);
  });
});
