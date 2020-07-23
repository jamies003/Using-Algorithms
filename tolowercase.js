// function count (str) {
//   // make object to return at the end
//   var obj = {};
//   // loop over for each character...

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase()
//     // if the character is a number/letter And is a key in object, add one count

//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char]>0) {
//         obj[char]++;
//         // if the char is a number/letter And not in object, add it to the object set value
//       }else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }
// count("How is the World Doing");

function charCount (str) {
  var obj = {};

  for (let i = 0; i < str.lenght; i++) {
     let char = char.toLowerCase();
      if (/[a-z0-9]/.test(char)) {
          obj[char] = ++obj [char] || 1;
      }
  }
  return obj;
}
charCount("What in The World is Going 0n");