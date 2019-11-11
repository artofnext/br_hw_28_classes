/*
Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов.
*/

class Marker {
    ink = 100;
    color = 'black';

    constructor (color = 'black') {
        this.color = color;
        // this.ink = ink < 0 ? 0 : ink > 100 ? 100 : ink;
    }

    write(str) {
        let output = '';

        for (let sym of str) {
            if (this.ink > 0) {
                output += sym;
            } else {
                console.log('Marker empty!')
                break;
            }
            if (sym == " ") {
                continue;
            }
            this.ink -= 0.5;
        }

        console.log(`%c${output}`,`color:${this.color}`)
    }
}

class RefillableMarker extends Marker {

    refull() {
        this.ink = 100;
    }

    refill(a) {
        let amount = this.ink + a;
        this.ink = amount < 0 ? 0 : amount > 100 ? 100 : amount;
    }
}

let marker = new Marker();
console.table(marker);

marker.write('Written with default marker');
console.table(marker);


new Marker('red').write('Written with red marker');

new Marker('green').write('This string was written with brand new green marker created as object with inline mew Class statement and was so load of shit small colored useless letters, that our marker accidentanly but obviously true ran out of its full loaded ink container at once');

let marker1 = new RefillableMarker();
console.table(marker1);

marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
console.table(marker1);

console.log('Refull');
marker1.refull();

console.table(marker1);

marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
console.table(marker1);

console.log('Refill with 10');
marker1.refill(10);

console.table(marker1);

marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');
marker1.write('Written with new refillable marker');

