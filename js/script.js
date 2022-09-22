/*let a = 5 + 7;
switch (a){
    case 11:
        alert('Не то,что нужно');
        break;
    case 13:
        alert('Чуть-чуть перебор');
        break;
    case 12:
        alert('В точку!');
        break;
    default:
        alert('Совсем не то, попробуй еще раз');
}*/


/*let a = '1';
let b = 0;

switch (+a){
    case b+1:
        alert('Данное условие выполнится, так как +а = 1');
        break;
    default:
        alert('Действие не выполнится');
}*/


//Задача 1

/*let browser;

if (browser = 'Edge'){
    alert('You have got the Edge!');
} else if (browser= 'Chrome'
    ||'Firefox'
    ||'Safari'
    ||'Opera'){
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!');
}*/

//Задача 2

const number = +prompt('Введите число между 0 и 3');

switch (number){
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

