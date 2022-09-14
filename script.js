const filterString = (str, char) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const currentChar = str[i];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    i += 1;
  }

  return result;
};
  const jjj = "Ебаные пидорас";
  const kkk = "Е";
  console.log(filterString(jjj, kkk));