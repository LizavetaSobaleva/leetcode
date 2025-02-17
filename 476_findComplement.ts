function findComplement(num: number): number {
  let comp = "";
  let bits = [...num.toString(2)];

  for (let bit of bits) {
    comp += bit === "1" ? "0" : "1";
  }

  return parseInt(comp, 2);
}

console.log(findComplement(5));
