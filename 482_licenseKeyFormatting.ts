function licenseKeyFormatting(s: string, k: number): string {
  let result: string = "";

  let arr = s
    .toUpperCase()
    .split("")
    .filter((c) => c !== "-");

  while (arr.length > k) {
    const group = arr.splice(-k).join("");
    result = "-" + group + result;
  }

  return arr.join("") + result;
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
