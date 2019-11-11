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
    color = black;

    constructor (color = black) {
        this.color = color;
        // this.ink = ink < 0 ? 0 : ink > 100 ? 100 : ink;
    }

    write(str) {
        let output = '';

        for (let sym of str) {
            if (this.ink > 0) {
                output += sym;
            } else {
                break;
            }
            if (sym == " ") {
                continue;
            }
            this.ink -= 0.5;
        }

        console.log(`%${output},color:${this.color}`)
    }
}