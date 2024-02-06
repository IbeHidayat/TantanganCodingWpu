// [1,2,3,4] => 1*2*3*4 = 24
// Seperti Faktorial
// Menghasilkan Nilai Dari Perkalian Semua Nilai Bilangan Dalam Array

// Cara 1

function grow(x) {
  let result = x[0];

  for (let i = 1; i < x.length; i++) {
    result = result * x[i];
  }

  return result;
}

// // Cara 2

function grow(x) {
  const result = x.reduce((acc, curr) => acc * curr, 1);

  return result;
}

// One Liner

const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3, 4, 5, 6]));
