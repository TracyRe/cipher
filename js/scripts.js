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
  return toMod + swapOrder(firstLast(toMod));
};

var bothFunctions = firstLastSwapConcat(sentence);
console.log(bothFunctions);

function countCat(toMod) {
  return toMod.charAt(((toMod.length - 1) / 2).toFixed(0)) + firstLastSwapConcat(toMod);
};

var firstCharSentence = countCat(sentence);
console.log(firstCharSentence);

function revSentence(toMod){
  toMod = toMod.split("");
  toMod = toMod.reverse();
  return toMod.join("");
}

var rev = revSentence(sentence) + countCat(sentence);

console.log(rev);



  $("h1").click(function() {
    document.getElementById("sentence").innerHTML =

    sentence;
  });

  $("h2").click(function() {
    document.getElementById("reverse").innerHTML =

    revSentence(sentence);
  });
});
