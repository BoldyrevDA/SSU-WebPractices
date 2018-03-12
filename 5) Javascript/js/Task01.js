function CalculatePhrase() {
    var field = document.getElementById('IDtext');
    var re = /((\d+\.\d)|\d+)|\+|\*|\/|-|=/g;
    var valuesPhrase = (field.value).match(re);
    if (valuesPhrase == null) {
        addResult("Совсем не то", countNumber);
    } 
    else {
            var indexEqual = valuesPhrase.indexOf('=');
            if (indexEqual == -1) {
                addResult("Не то", countNumber);
            }
            else {
                var result = ConversionToValue(valuesPhrase, indexEqual);
                addResult(result.toFixed(2), countNumber);
                //field.value = result;
            }
    }
}

function ConversionToValue (valuesPhrase, indexEqual) {
    var result = parseFloat(valuesPhrase[0])
    for(var i = 1; i < indexEqual; i += 2) {
        var sign = valuesPhrase[i];
        var value = parseFloat(valuesPhrase[i + 1]);
        switch (sign) {
            case '+':
                result += value;
                break;
            case '-':
                result -= value;
                break;
            case '*':
                result *= value;
                break;
            case '/':
                result /= value;
                break;
            }
        }
    return result;
}
/*
function addResult(resultText, idElem){
    var newText = document.createElement('p');
    newText.innerHTML = resultText;
    countNumber.appendChild(newText);
}*/