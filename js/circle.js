/*
Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов.
*/

class circle {
    constructor (r) {

        this.r = r;
    }

    /**
     * @returns {number}
     */
    get radius() {
        return this.r;
    }
    
    /**
     * @takes {number}
     */
    set radius(r) {
        this.r = r;
    }

    /**
     * @returns {number}
     */
    get diametr() {
        return this.r * 2;
    }
    
    /**
     * @returns {number}
     */
    area () {
        return Math.PI * this.r * this.r;
    }
    
    /**
     * @returns {number}
     */
    length () {
        return Math.PI * 2 * this.r;
    }
}