function toLowerCase(s: string): string {
  return s
    .split("")
    .map((c) =>
      c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90
        ? String.fromCharCode(c.charCodeAt(0) + 32)
        : c
    )
    .join("");
}

console.log(toLowerCase("al&phaBET"));
