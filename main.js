"use strict";
// FizzBuzz Masalasi
let number = Math.floor(Math.random() * 100);
if (number % 15 === 0) {
  console.log(`${number} bu son 3 ga ham 5 ga ham bulinadi`);
} else if (number % 3 === 0) {
  console.log(`${number} bu son 3 ga  bulinadi`);
} else if (number % 5 === 0) {
  console.log(`${number} bu son 5 ga  bulinadi`);
} else {
  console.log(`${number} bu son 3 ga ham 5 ham bulinmaydi`);
}
