function repeatStringNumTimes(str, num) {
  var repeatedString = "";

  if (0 >= num) return repeatedString;

  while (num > 0) {
    repeatedString += str;
    num-- 

    console.log(repeatedString);
    console.log(num);

  }
     return repeatedString;
     
  }
  
repeatStringNumTimes("abc", 6);
