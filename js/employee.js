/*
Реализовать класс Employee, описывающий работника, и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
*/

class Employee {
    constructor (name,pos,salary) {
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