var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var numberArray = [];

var one = "I";
var five = "V";
var ten = "X";
var fifty = "L";
var hundred = "C";
var fiveHundred = "D";
var thousand = "M";

var singleCharacters = function(number){
  if (number == 0){
  return " ";
} else if (number[-1] == 1){
  return one;
} else if (number == 2){
  return one + one;
} else if (number == 3){
  return one + one + one;
} else if (number == 4){
  return one + five ;
} else if (number == 5){
  return five ;
} else if (number == 6){
  return five + one;
} else if (number == 7){
  return five + one + one;
} else if (number == 8){
  return five + one + one + one;
} else if (number == 9){
  return one + ten ;
}
}

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
// for(var index = 0; index < userInput.length; index += 1){
//   if (userInput[-1] === numbers[index]){
//   }  ;



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
    var output = singleCharacters(userInput);

    makeArray(userInput);
    console.log(userInput);


    // console.log(userInput);
    $("#result").text(output);
  });
});
