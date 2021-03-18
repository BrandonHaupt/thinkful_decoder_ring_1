// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (e.g., helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6

// const polybiusModule = (function () {
//   // you can add any code you want within this function scope

//   function polybius(input, encode = true) {
//     // your solution code here
//     let array = [] //shiftingArray
//     let message = input.toLowerCase(); //newInput
//     numberedMessage = message.split(""); //trueShift

//     // =============== ENCODED =====================
//    if (encode) {
//     for (let i = 0; i < message.length; i++) {
//       switch (numberedMessage[i]){
//         case "a": 
//           results = 11;
//           array.push(results)
//           break;
//         case "b": 
//           results = 21;
//           array.push(results)
//           break;
//         case "c": 
//           results = 31;
//           array.push(results)
//           break;
//         case "d":
//           results = 41; 
//           array.push(results)
//           break;
//         case "e": 
//           results = 51;
//           array.push(results)
//           break;
//         case "f": 
//           results = 12;
//           array.push(results)
//           break;
//         case "g": 
//           results = 22;
//           array.push(results)
//           break;
//         case "h": 
//           results = 32;
//           array.push(results)
//           break;
//         case "i": 
//           results = 42;
//           array.push(results)
//           break;
//         case "j": 
//           results = 42;
//           array.push(results)
//           break;
//         case "k": 
//           results = 52;
//           array.push(results)
//           break;
//         case "l": 
//           results = 13;
//           array.push(results)
//           break;
//         case "m": 
//           results = 23;
//           array.push(results)
//           break;
//         case "n": 
//           results = 33;
//           array.push(results)
//           break;
//         case "o": 
//           results = 43;
//           array.push(results)
//           break;
//         case "p": 
//           results = 53;
//           array.push(results)
//           break;
//         case "q": 
//           results = 14;
//           array.push(results)
//           break;
//         case "r": 
//           results = 24;
//           array.push(results)
//           break;
//         case "s": 
//           results = 34;
//           array.push(results)
//           break;
//         case "t": 
//           results = 44;
//           array.push(results)
//           break;
//         case "u": 
//           results = 54;
//           array.push(results)
//           break;
//         case "v": 
//           results= 15;
//           array.push(results)
//           break;
//         case "w": 
//           results = 25;
//           array.push(results)
//           break;
//         case "x": 
//           results = 35;
//           array.push(results)
//           break;
//         case "y": 
//           results = 45;
//           array.push(results)
//           break;
//         case "z": 
//           results = 55;
//           array.push(results)
//           break;
//         default: 
//           array.push(numberedMessage[i])
//       }   
//     }
//     let jumbledMessage = array.join('')
//     console.log(jumbledMessage)
//     return jumbledMessage
//    }

// // =============== DECODED =====================
//    if (!encode){
//     let str = message;
//     encoded = str.match(/([0-9]{2})|(\s){1}/g);
//     for (let j = 0; j < encoded.length; j++) {
//       switch (encoded[j]) {
//         case "11": 
//           results = "a";
//           array.push(results)
//           break;
//         case "21": 
//           results = "b";
//           array.push(results)
//           break;
//         case "31": 
//           results = "c";
//           array.push(results)
//           break;
//         case "41":
//           results = "d"; 
//           array.push(results)
//           break;
//         case "51": 
//           results = "e";
//           array.push(results)
//           break;
//         case "12": 
//           results = "f";
//           array.push(results)
//           break;
//         case "22": 
//           results = "g";
//           array.push(results)
//           break;
//         case "32": 
//           results = "h";
//           array.push(results)
//           break;
//         case "42": 
//           results = "(i/j)";
//           array.push(results)
//           break;
//         case "52": 
//           results = "k";
//           array.push(results)
//           break;
//         case "13": 
//           results = "l";
//           array.push(results)
//           break;
//         case "23": 
//           results = "m";
//           array.push(results)
//           break;
//         case "33": 
//           results = "n";
//           array.push(results)
//           break;
//         case "43": 
//           results = "o";
//           array.push(results)
//           break;
//         case "53": 
//           results = "p";
//           array.push(results)
//           break;
//         case "14": 
//           results = "q";
//           array.push(results)
//           break;
//         case "24": 
//           results = "r";
//           array.push(results)
//           break;
//         case "34": 
//           results = "s";
//           array.push(results)
//           break;
//         case "44": 
//           results = "t";
//           array.push(results)
//           break;
//         case "54": 
//           results = "u";
//           array.push(results)
//           break;
//         case "15": 
//           results= "v";
//           array.push(results)
//           break;
//         case "25": 
//           results = "w";
//           array.push(results)
//           break;
//         case "35": 
//           results = "x";
//           array.push(results)
//           break;
//         case "45": 
//           results = "y";
//           array.push(results)
//           break;
//         case "55": 
//           results = "z";
//           array.push(results)
//           break;
//         default: 
//           array.push(encoded[j])
//       }
//     }
//     let unjumbled = array.join('');
//     let nott = unjumbled;
//     // if (nott.replace(/\D/, "").length & 1) {return false}
//     if (nott.match(/[^\s]/g).length  %2 === 1) {
//       return false
//     }
//     console.log(nott)
//     return nott
//   }


//   }

//   return {
//     polybius,
//   };
// })();

// module.exports = polybiusModule.polybius;

const polybiusModule = (() => {
  const DECODE_KEY = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  const ENCODE_KEY = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let split;
    let KEY = ENCODE_KEY;
    if (encode) {
      split = input.split("");
    } else {
      KEY = DECODE_KEY;
      split = input.split(" ");
      const isOdd = split.reduce((acc, arr) => acc + arr.length, 0) % 2;
      if (isOdd) return false;
      split = split
        .map((section) => {
          return section.split("").reduce((acc, char, index, collection) => {
            if (char === " ") {
              acc.push(" ");
            } else if (!(index % 2)) {
              acc.push(char + collection[index + 1]);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b));
    }
    return split.map((char) => KEY[char] || " ").join("");
  }
  return {
    polybius,
  };
})();
module.exports = polybiusModule.polybius;