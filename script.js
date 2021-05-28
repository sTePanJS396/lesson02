let money = 200000;
let income = 'Реклама в паблике ВК';
let addExpenses = 'Интернет, Каршеринг, Аренда квартиры';
let mission = 500000;
let deposit = false;
let period = 5;

let budgetDay = 200000/30;
// Объявление переменных

console.log('Тип переменной money: ', typeof money);
console.log('Тип переменной income: ', typeof income);
console.log('Тип переменной deposit: ', typeof deposit);
// Типы данных

console.log('Длинна переменной addExpenses: ', addExpenses.length);
// Длинна строки

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
// Конкантенация

console.log('После приведения строки addExpenses к нижнему регистру, она приняла такой вид: ', addExpenses.toLocaleLowerCase());
console.log('А массив из строки будет такой: ', addExpenses.toLocaleLowerCase().split(', '));
// Работа со строкой

console.log('Желаемый дневной доход находится в переменной budgetDay: ', budgetDay);
// Желаемый доход в день