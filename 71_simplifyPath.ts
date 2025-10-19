function simplifyPath(path: string): string {
  const arr: string[] = path.split("/").filter((c) => c != "");

  const stack: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (current === "..") stack.pop();
    else if (current === ".") continue;
    else stack.push(current);
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/a/../../b/../c//.//"));
