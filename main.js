
document.getElementById('buttonDelete').addEventListener('click',function(){
    var textElt = document.getElementById('wordsField');
    var inputText = textElt.value.split(" ");
    var arr = [ 1, 3, 5, 1, 2, 3, 7, 4, 5];
    var unique = Array.from(new Set(inputText));
    textElt.value = unique.join(" ");
 });
