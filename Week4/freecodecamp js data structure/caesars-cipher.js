function rot13(str) {
  let result = "";
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map(x => String.fromCharCode(x));
  for (let i of str) {
    if (!alphabet.includes(i)) result += i;
    else if (i < alphabet[13])
      result += alphabet[alphabet.indexOf(i) + 13];
    else
      result += alphabet[alphabet.indexOf(i) - 13];
  }
  return result;
}

rot13("SERR PBQR PNZC");