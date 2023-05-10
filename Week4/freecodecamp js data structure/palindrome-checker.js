function palindrome(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, '').toLowerCase();
  return str.split("").reverse().join("") == str;
}

palindrome("eye");