$(document).ready(function() {

var sentence = prompt("Type a sentence.");

console.log(sentence);

function firstLast (toMod) {
  return toMod.charAt(0).toUpperCase() + toMod.charAt(toMod.length-1).toUpperCase();
};

var firstAndLast = firstLast(sentence);
console.log(firstAndLast);

function swapOrder(toMod){
  return toMod.charAt(1) + toMod.charAt(0);
};

var lastAndFirst = swapOrder(firstAndLast);

console.log(lastAndFirst);

function firstLastSwapConcat(toMod){
  return swapOrder(firstLast(toMod));
};

var bothFunctions = firstLastSwapConcat(sentence);
console.log(sentence + bothFunctions);

function countCat(toMod) {
  return toMod.charAt(((parseInt(toMod.length - 1) / 2)))+toMod+swapOrder(firstLast(toMod));
};

var firstCharSentence = countCat(sentence);
console.log(firstCharSentence);

function revSentence(toMod){
  toMod = toMod.split("");
  toMod = toMod.reverse();
  return toMod.join("");
}

var rev = revSentence(countCat(sentence));

console.log(rev);



  $('.sentence').click(function() {
    document.getElementsByClassName("sentence")[1].innerHTML = sentence;
    document.getElementsByClassName("reverse")[1].innerHTML = "";
  });

  $('.reverse').click(function() {
    document.getElementsByClassName("reverse")[1].innerHTML = revSentence(sentence);
    document.getElementsByClassName("sentence")[1].innerHTML = "";
  });
});
