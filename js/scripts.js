//Utility Logic
function isEmpty() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  } 
  return false;
}


//Business logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function countMostCommonWords (array, text) {
  if (isEmpty(array)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    let newArray = [];
    if (newArray[element]) {
      newArray[element] += 1;
    } else {
      newArray[element] = 1;
    }
  });
}

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    console.log(i);
    if (word === textArray[i]) {
      return i;
    }
  }
  return -1;
}

function omitBadWords(array, text) {
  if (isEmpty(array)) {
    return 0;
  }
  const textArray = text.split(" ");
  let outputString = "";
  const replaceWord = "redacted";
  textArray.forEach(function(element) {
    let newString = "";
    let wordMatch = false;
    array.forEach(function(word) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        newText = replaceWord;
        wordMatch = true;
      }
    });
    if (!wordMatch) {
      newText = element;
    }
    outputString += (newText + " ");
    if (index !== (textArray.length - 1)) {
      outputString.append(" ");
    }
  });
  return outputString;
}

//UI Logic

function boldPassage(word, text) {
  if (isEmpty(word, text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  e.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  n)document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

