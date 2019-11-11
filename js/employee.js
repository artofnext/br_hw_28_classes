/*
Реализовать класс Employee, описывающий работника, и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
* comment: класс EmpTable по сути должен бьіть функцией.

Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
*/

class Employee {
    fields = [
        'Name',
        'Position',
        'Salary',
    ];

    constructor (name, pos, salary) {
        [this.firstName, this.lastName] = name.split(" ");
        this.pos = pos;
        this.slr = salary;
    }

    get name() {
        return this.firstName + " " + this.lastName;
    }

    get salary() {
        return this.slr;
    }

    get position() {
        return this.pos;
    }

    fire() {
        this.pos = 'FIRED!'
    }

    changeSalaryBy(a) {
        this.slr += a;
    }
}

class EmpTable {

    styles = "width:90%;max-width:800px;margin: 0 auto;text-align:center;";
    tableBody = "";

    constructor (list) {
        this.list = list;
    }

    getHTML() {

        let tableHead = '<tr><th>Name</th><th>Position</th><th>Salary</th></tr>';

        let tableContent = '';

        for (let employee of this.list) {
            tableContent += '<tr>';

            tableContent += '<td>';
            tableContent += employee.name;
            tableContent += '</td>';

            tableContent += '<td>';
            tableContent += employee.position;
            tableContent += '</td>';

            tableContent += '<td>';
            tableContent += employee.salary;
            tableContent += '</td>';

            tableContent += '</tr>';
        }

        this.tableBody = tableHead + tableContent;

        return `<table style="${this.styles}">${this.tableBody}</table>`;
    }
}

function generateRandom (from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}

function generateEmployeeList (length) {
    let list = [];
    for (let i = 0; i < length; i++) {
        list.push(new Employee(
            fNames[generateRandom(0, fNames.length)] + ' ' + lNames[generateRandom(0, lNames.length)],
            positions[generateRandom(0, positions.length)],
            generateRandom(1000, 2000)
            )
        )
    };

    return list;
}

function renderList (list) {
    let table = document.createElement('table');
    let headRow = document.createElement('tr');
    for (let i = 0; i < list[0].fields.length; i++) {
        let cell = document.createElement('td');
        cell.innerHTML = list[0].fields[i];
        headRow.appendChild(cell);
    }
    
    table.appendChild(headRow);
    
    for (let i = 0; i < list.length; i++) {
        let row = document.createElement('tr'); // Ask about 'let' declaration in cycle
        let cell1 = document.createElement('td');
        cell1.innerHTML = list[i].name;
        row.appendChild(cell1);
        let cell2 = document.createElement('td');
        cell2.innerHTML = list[i].position;
        row.appendChild(cell2);
        let cell3 = document.createElement('td');
        cell3.innerHTML = list[i].salary;
        row.appendChild(cell3);

        table.appendChild(row);
    }

    document.body.appendChild(table);
}

let fNames = ['Alex','John','James','Kate','Sally'];
let lNames = ['Smith','Wozniak','Berry','Lee','Turing'];
let positions = ['Sales','PM','QA','Dev','TL'];

let list1 = generateEmployeeList(10);

console.table(list1);
// console.table(new Employee('Alan Force', 'CEO', 1500));

let table1 = new EmpTable(list1);

document.write(table1.getHTML());

renderList (list1);
