/*
class User {
    name: string;
    age: number;
    status?: boolean;

    constructor(name: string, age: number, status: boolean) {

        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting() {

    }
}


function foobar(a: User): string[] {

    return []

}

foobar({name: 'Jora', age: 2, status: true,greeting() {
    }});

let user = new User('Vasia', 23, true)

let user2 = {
    name: "jore",
    age: 21,
    greeting() {
        console.log('sss');
    }
}

foobar(user2);*/

/*
interface IUser {
    name: string;
    age: number;
    status?: boolean;

    greeting(msg): void;

}

function foobar(a: IUser) {

}

let user = {
    name: "string",
    age: 23,

    greeting(msg) {
        console.log(msg + '!!!');
    }

}

foobar(user);

class User implements IUser {
    age: number;
    name: string;
    status: boolean;
    skills: string[];

    greeting(msg): void {
        console.log('sss')
    }

}

new User();*/


/*
interface A {
    a: number;
}

interface B {
    b: number;
}

class Main implements A, B {
    a: number;
    b: number;

}

let main = new Main();

function foo(x: A) {

}

foo(main);

function bar(x: B) {

}

bar(main); */

/*
let arr: string[] = ['asd', 'asd'];
let numbers: Array<number> = [1, 23, 3];
*/

/*
1) создать интерфейс на основе user и протипизировать функции:

interface IUser {
    name: string;
    age: number;
    gender: string;

}

const user = {
    name:"Max",
    age:18,
    gender:'male'
}

function sum(a,b):number{
    return a+b;
}
function showSum(a: number, b: number){
    console.log(a + b);
}

function incAge(a:IUser, inc:number):IUser{
    a.age+=inc;
    return a;
}

console.log(sum(1, 2));
showSum(2,3);
incAge(user, 2);

2)написать интерфейс Animal который описывает:
    -тип движения животного(плавает, ходит, бегает) типа стринг
-что умеет говорить тип стринг
-и функцию которая возвращает информацию о животном
interface IAnimal {
    moving: IAnimalMoving;
    talk: string;

    greeting(info);
}

interface IAnimalMoving {
    swim: string;
    run: string;
    walk: string;
}

class Cat implements IAnimal {
    moving: IAnimalMoving;
    talk: string;

    greeting(info) {
        return info;
    }
}

class Bird implements IAnimal {
    moving: IAnimalMoving;
    talk: string;

    greeting(info) {
        return info;
    }
}

class Fish implements IAnimal {
    moving: IAnimalMoving;
    talk: string;

    greeting(info) {
        return info;
    }
}

let fish = new Fish();
let bird = new Bird();
let cat = new Cat();

function xxx(a:IAnimal){}

xxx(fish);
xxx(cat);
xxx(bird);
создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

*** 3) создать абстрактный класс Shape:
    добавить абстрактные методы perimeter() и area()

создать два класса Triangle и Rectangle и унаследовать их от Shape
переопределить для каждого класса методы под ваши фигуры

кладем в массив экземпляры классов(количество может быть любым но мин 2)
проходимся циклом по нему и и высчитываем площадь для каждой фигуры*/
abstract class Shape {
    abstract perimeter(): void;

    abstract area(): void;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    area(): void {
        let square = this.width * this.height;
        console.log("area =", square);
    }

    perimeter(): void {
        let perim = (this.width + this.height) * 2;
        console.log("perimeter =", perim);
    }
}

class Triangle extends Shape {

    private first_side: number;
    private second_side: number;
    private third_side: number;


    area(): void {
        let trigon = this.first_side * this.second_side * this.third_side;
        console.log("area =", trigon);
    }

    perimeter(): void {
        let perim = this.first_side + this.second_side + this.third_side;
        console.log("perimeter =", perim);
    }
}

const rectangle = new Rectangle();
const triangle = new Triangle();


