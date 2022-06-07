const stringLength = (string) => {

  console.log(string.length);

  if (string.length >= 1 && string.length <= 10) {
    return string.length;

  } else {
    throw new Error("Please provide string between 1 - 10 chars long");
  }
};

const stringReverse = (text) => {
  let strReverse = '';
  for (let i = text.length - 1; i >= 0; i--) {
    // console.log(strReverse);
    strReverse += text[i];
  }
  return strReverse;
};

const capitalizeLetter = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

// console.log(stringLength('testtesttest'));

module.exports = { stringLength, stringReverse, capitalizeLetter };