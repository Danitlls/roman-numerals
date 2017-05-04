var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var numberArray = [];

// var M = numberArray[-4];
// var C = numberArray[-3];
// var D = numberArray[-2];
// var U = numberArray[-1];
//
//
// var romanNumeralDisplay = function(number){
//   if (U = true) {
//   return true
// }
// }


// var one = "I";
// var five = "V";
// var ten = "X";
// var fifty = "L";
// var hundred = "C";
// var fiveHundred = "D";
// var thousand = "M";
//
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

var makeArray = function(number1){
var splitUserInput = number1.split("");
numberArray.push(splitUserInput);
console.log(numberArray);
}

// now on to tens

// var secondCharacters = function(number){
//   if (number === 0){
//   return " ";
// } else if (number === 1){
//   return ten;
// } else if (number === 2){
//   return ten + ten;
// } else if (number === 3){
//   return ten + ten + ten;
// } else if (number === 4){
//   return ten + fifty ;
// } else if (number === 5){
//   return fifty ;
// }
//
// }
var numerals = ["I", "II", "III", "IV", "V", "VI","VII", "VIII", "IX"];

var numbers = [1, 2, 3, 4, 5, 6,7, 8, 9];

var someFunc = function(input) {
  var newArray = [];

  for(var index = 0; index < numbers.length; index += 1){
    if (numbers[index] === input){
      newArray.push(numberals[numbers[index]])
    }
    // if (numberArray[numberArray.length - 2] === numbers[index]){
    //
    // }
  };
  // return newArray.join()
  return newArray;
}

// for(var index = 0; index < numberArray.length; index += 1){
//   if (numberArray[numberArray.length - 1] === numbers[index]){
//     foo.push(nu)
//
//   }
//
//   if (numberArray[numberArray.length - 2] === numbers[index]){
//
//
//   }
//   };



// for(var index = 0; index < userInput.length; index += 1){
//   if (singleCharacters(number) === romanNumerals[index]){
//     ;
//   }
//   console.log(singleCharacters);
// }

$(document).ready(function(){
  $("#roman-numeral").submit(function(event){
    event.preventDefault();

    var userInput = $("#userNumber").val();
    var output = someFunc(userInput);

    makeArray(userInput);
    // console.log(makeArray(userInput));


    someFunc(userInput);


    $("#result").text(output);
  });
});
