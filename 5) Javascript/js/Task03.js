function formatDate() {
    var dataField = document.getElementById("IDdate");
    var maskValue = document.getElementById("mask").value;
    var year = dataField.children[1].value,
        forMonth = dataField.children[2],
        month = forMonth.options[forMonth.selectedIndex].text,
        monthNumber = forMonth.selectedIndex+1,
        day = dataField.children[3].value,
        hour = dataField.children[4].value,
        minute = dataField.children[5].value,
        second = dataField.children[6].value;
        
    var hourIn12Format = get12HourFormat(hour);
        
    var dateFormats = {
        yyyy : year,
        yy : year%100,
        dd : getFormatTwoDigit(day),
        d : day,
        HH : getFormatTwoDigit(hour),
        H : hour,
        hh : getFormatTwoDigit(hourIn12Format),
        h : hourIn12Format,
        mm : getFormatTwoDigit(minute),
        m : minute,
        ss : getFormatTwoDigit(second),
        s : second,
        MMMM : month,
        MMM : month.substr(0,3),
        MM : getFormatTwoDigit(monthNumber),
        'M(?!ar|ay)': monthNumber
    }
    
    var re;
    for(key in dateFormats)
        {
            re = new RegExp(key,'g');
            maskValue = (maskValue).replace(re, dateFormats[key]);
        }
    addResult(maskValue, IDdate);
    
}

function getFormatTwoDigit(value){
    return (value >= 10)? value : '0'+ +value;
}

function get12HourFormat(value)
{
    if(value == 24) {
        return 12;
    }
    else {
        return (value >12)? value%12 : value;
    }
}

function addResult(resultText, idElem){
    var newText = document.createElement('p');
    newText.innerHTML = resultText;
    idElem.appendChild(newText);
}

function changeLanguage(){
    var btnLang = document.getElementById('btnLang');
    var options = document.getElementById('month').options;
    if(btnLang.textContent == 'English'){
        btnLang.textContent = 'Russian';
        options[0].text = 'Январь';
        options[1].text = 'Февраль';
        options[2].text = 'Март';
        options[3].text = 'Апрель';
        options[4].text = 'Май';
        options[5].text = 'Июнь';
        options[6].text = 'Июль';
        options[7].text = 'Август';
        options[8].text = 'Сентябрь';
        options[9].text = 'Октябрь';
        options[10].text = 'Ноябрь';
        options[11].text = 'Декабрь';
    }
    else{
        btnLang.textContent = 'English';
        options[0].text = 'January';
        options[1].text = 'February';
        options[2].text = 'March';
        options[3].text = 'April';
        options[4].text = 'May';
        options[5].text = 'June';
        options[6].text = 'July';
        options[7].text = 'August';
        options[8].text = 'September';
        options[9].text = 'October';
        options[10].text = 'November';
        options[11].text = 'December';
    }
}