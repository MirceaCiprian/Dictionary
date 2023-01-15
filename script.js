const dictionary = [];

function addWord() {
    let word = document.getElementById("word-field").value;
    if(dictionary.includes(word) === false)
        dictionary.push(word);
    else
        window.alert("Word already in the dictionary!!")
    
}

function wordList() {
    for(let i = 0; i < dictionary.length; i++)
    {
        document.getElementById("list-of-words").innerHTML = dictionary.join("<br>");
    }
    
}
function searchWord() {
    let word = document.getElementById("search-field").value;
    if(word.length == 0)
    {
        document.getElementById("result").innerHTML = "Introduce a word in the field above";
    }
    else if(dictionary.includes(word))
        document.getElementById("result").innerHTML = "Word found!";
    else
        document.getElementById("result").innerHTML = "Word not in the list";
}

function wordListClose() {
    document.getElementById("list-of-words").innerHTML ="";    
}
