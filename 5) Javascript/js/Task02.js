
function DeleteRepeatedSymbols() {
    var field = document.getElementById('textForEdit');
    var regFindWords = /([а-яa-z\-])+/gi;
    var valuesPhrase = (field.value).match(regFindWords);
    var result = field.value;
    if(valuesPhrase!=null && valuesPhrase.length!=1){
        var regRepeatedSymbol = GetRegExpReplaceDash(valuesPhrase[0]);
        regRepeatedSymbol = GetRegExpRepeatedSymbol(valuesPhrase, regRepeatedSymbol);
        if(regRepeatedSymbol!=undefined){
            result = (field.value).replace(regRepeatedSymbol, '');
        }
    }
    AddResult(result);
}


function AddResult(resultText){
    var newText = document.createElement('p');
    newText.innerHTML = resultText;
    var btnElement = document.getElementById('btnDelete');
    delRepeated.insertBefore(newText, btnElement);
}

function GetRegExpReplaceDash(word){
    var changeWord = word.replace(/\-/g, "\\-");
    return (new RegExp("["+changeWord+"]","g"));
}

function GetRegExpRepeatedSymbol(valuesPhrase, regRepeatedSymbol){
    var arrayRepeatedSymbol, RepeatedSymbol;
    for(var i=1; i<valuesPhrase.length; i++){   
        arrayRepeatedSymbol = valuesPhrase[i].match(regRepeatedSymbol);
        if(arrayRepeatedSymbol!=null){
            RepeatedSymbol = arrayRepeatedSymbol.join('');
        }
        else {
            return;
        }
        var regRepeatedSymbol = GetRegExpReplaceDash(RepeatedSymbol);
    }
    return regRepeatedSymbol;
}