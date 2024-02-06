// Build a Function that returns an array of integers from n to 1 where n>1

// Exp: n=5 => [5,4,3,2,1]

// Cara 1

const reverseSeq = (n) => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};

console.log(reverseSeq(5));

// Cara 2

const reverseSequence = (n) => {
  return [...Array(n)].fill().map((el, i) => n - i);
};

console.log(reverseSequence(5));
