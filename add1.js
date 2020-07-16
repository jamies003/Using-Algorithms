// function addUp (n) {

//     let total = 0;

//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(addUp(6))

function addUp (n) {
  return n * (n + 1) / 2;
}
console.log(addUp(6));