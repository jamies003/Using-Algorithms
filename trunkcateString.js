function truncateString(str, num) {
  var truncate = str.length

    // console.log(truncate);

  if (truncate > num) {
    return str.slice(0, num) + "...";


  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);