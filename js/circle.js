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

class Circle {
    
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

let circle1 = new Circle(3);

console.log('Create new circle:')
console.table(circle1);

console.log('Get radius:');
console.log(circle1.radius);

console.log('Get diametr:');
console.log(circle1.diametr);

console.log('Get area:');
console.log(circle1.area());

console.log('Get length:');
console.log(circle1.length());

console.log('Set radius to 5:')
circle1.radius = 5;
console.table(circle1);

console.log('Get radius:');
console.log(circle1.radius);

console.log('Get diametr:');
console.log(circle1.diametr);

console.log('Get area:');
console.log(circle1.area());

console.log('Get length:');
console.log(circle1.length());


