function confirmEnding(str, target) {
 
  console.log(str.length);
  // let doesContain = false;
  return str.slice(str.length - target.length) === target; ;

  // the slice method is used to get the postion on "N" aand rturn the target letter
}

confirmEnding("Bastian", "n");
