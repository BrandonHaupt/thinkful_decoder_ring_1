// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

 // 

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // if (!alphabet.some((letter) => letter === char.toLowerCase()))
    // return char;
  // let alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
// your solution code here
    let realMessage = ""
    let array = [] //shiftingArray
    let message = input.toLowerCase(); //newInput
    shiftedMessage = message.split(""); //trueShift
    let jumbled = []

    if (shift > 25 || shift < -25 || shift === 0 || shift === undefined ) {
      return false
    } 

    if (!encode){
      shift *= -1
    }

    //Encode
    for (let i = 0; i < message.length; i++) {
      switch (shiftedMessage[i]){
        case "a": 
          results = 0 + shift;
          array.push(results)
          break;
        case "b": 
          results = 1 + shift;
          array.push(results)
          break;
        case "c": 
          results = 2 + shift;
          array.push(results)
          break;
        case "d":
          results = 3 + shift; 
          array.push(results)
          break;
        case "e": 
          results = 4 + shift;
          array.push(results)
          break;
        case "f": 
          results = 5 + shift;
          array.push(results)
          break;
        case "g": 
          results = 6 + shift;
          array.push(results)
          break;
        case "h": 
          results = 7 + shift;
          array.push(results)
          break;
        case "i": 
          results = 8 + shift;
          array.push(results)
          break;
        case "j": 
          results = 9 + shift;
          array.push(results)
          break;
        case "k": 
          results = 10 + shift;
          array.push(results)
          break;
        case "l": 
          results = 11 + shift;
          array.push(results)
          break;
        case "m": 
          results = 12 + shift;
          array.push(results)
          break;
        case "n": 
          results = 13 + shift;
          array.push(results)
          break;
        case "o": 
          results = 14 + shift;
          array.push(results)
          break;
        case "p": 
          results = 15 + shift;
          array.push(results)
          break;
        case "q": 
          results = 16 + shift;
          array.push(results)
          break;
        case "r": 
          results = 17 + shift;
          array.push(results)
          break;
        case "s": 
          results = 18 + shift;
          array.push(results)
          break;
        case "t": 
          results = 19 + shift;
          array.push(results)
          break;
        case "u": 
          results = 20 + shift;
          array.push(results)
          break;
        case "v": 
          results= 21 + shift;
          array.push(results)
          break;
        case "w": 
          results = 22 + shift;
          array.push(results)
          break;
        case "x": 
          results = 23 + shift;
          array.push(results)
          break;
        case "y": 
          results = 24 + shift;
          array.push(results)
          break;
        case "z": 
          results = 25 + shift;
          array.push(results)
          break;
        default: 
          array.push(shiftedMessage[i])
          break;
      }

      for (let n = 0; n < message.length; n++) {
        if (array[n] > 25) {
          array[n] = array[n] - 26
        }
        if (array[n] < 0) {
          array[n] = array[n] + 26
        }
      }
     
    }
    // console.log(array)

    //!encode
    for (let j = 0; j < message.length; j++) {
      switch (array[j]){
        case 0: 
          results = "a";
          jumbled.push(results)
          break;
        case 1: 
          results = "b";
          jumbled.push(results)
          break;
        case 2: 
          results = "c";
          jumbled.push(results)
          break;
        case 3:
          results = "d"; 
          jumbled.push(results)
          break;
        case 4: 
          results = "e";
          jumbled.push(results)
          break;
        case 5: 
          results = "f";
          jumbled.push(results)
          break;
        case 6: 
          results = "g";
          jumbled.push(results)
          break;
        case 7: 
          results = "h";
          jumbled.push(results)
          break;
        case 8: 
          results = "i";
          jumbled.push(results)
          break;
        case 9: 
          results = "j";
          jumbled.push(results)
          break;
        case 10: 
          results = "k";
          jumbled.push(results)
          break;
        case 11: 
          results = "l";
          jumbled.push(results)
          break;
        case 12: 
          results = "m";
          jumbled.push(results)
          break;
        case 13: 
          results = "n";
          jumbled.push(results)
          break;
        case 14: 
          results = "o";
          jumbled.push(results)
          break;
        case 15: 
          results = "p";
          jumbled.push(results)
          break;
        case 16: 
          results = "q";
          jumbled.push(results)
          break;
        case 17: 
          results = "r";
          jumbled.push(results)
          break;
        case 18: 
          results = "s";
          jumbled.push(results)
          break;
        case 19: 
          results = "t";
          jumbled.push(results)
          break;
        case 20: 
          results = "u";
          jumbled.push(results)
          break;
        case 21: 
          results= "v";
          jumbled.push(results)
          break;
        case 22: 
          results = "w";
          jumbled.push(results)
          break;
        case 23: 
          results = "x";
          jumbled.push(results)
          break;
        case 24: 
          results = "y";
          jumbled.push(results)
          break;
        case 25: 
          results = "z";
          jumbled.push(results)
          break;
        default: 
          jumbled.push(array[j])
          break;
      }
      // console.log(array[j])
    }
 
    realMessage = jumbled.join('')
    // console.log(message)
    // console.log(`hmm`, array, jumbledMessage)
    return realMessage
   
    
  }
 
  return {caesar,};
})();

module.exports = caesarModule.caesar;
