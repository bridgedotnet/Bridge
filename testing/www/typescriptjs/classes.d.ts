/// <reference path="./bridge.d.ts" />

declare module Classes {
    export interface StaticClass {
    }
    export interface StaticClassFunc extends Function {
        prototype: StaticClass;
        new (): StaticClass;
        move(p: Classes.Point, dx: number, dy: number): Classes.Point;
    }
    var StaticClass: StaticClassFunc;

    export interface Point {
        x: number;
        y: number;
        getHashCode(): Classes.Point;
        equals(o: Classes.Point): Boolean;
        $clone(to: Classes.Point): Classes.Point;
    }
    export interface PointFunc extends Function {
        prototype: Point;
        constructor$1: {
            new (x: number, y: number): Point
        };
        $constructor: {
            new (): Point
        };
    }
    var Point: PointFunc;

    export interface MovePoint {
        getPoint(): Classes.Point;
        setPoint(value: Classes.Point): void;
        move(dx: number, dy: number): void;
    }
    export interface MovePointFunc extends Function {
        prototype: MovePoint;
        new (): MovePoint;
        move(p: Classes.Point, dx: number, dy: number): Classes.Point;
    }
    var MovePoint: MovePointFunc;

    export interface Dog extends Classes.Animal {
        move$1(): number;
    }
    export interface DogFunc extends Function {
        prototype: Dog;
        new (name: string): Dog;
    }
    var Dog: DogFunc;

    export interface Animal {
        getName(): string;
        move(): number;
    }
    export interface AnimalFunc extends Function {
        prototype: Animal;
        $constructor: {
            new (): Animal
        };
        constructor$1: {
            new (name: string): Animal
        };
    }
    var Animal: AnimalFunc;

    export interface Snake extends Classes.Animal {
        move(): number;
    }
    export interface SnakeFunc extends Function {
        prototype: Snake;
        new (name: string): Snake;
    }
    var Snake: SnakeFunc;

    export interface Employee extends Classes.Animal {
    }
    export interface EmployeeFunc extends Function {
        prototype: Employee;
        new (name: string, id: number): Employee;
    }
    var Employee: EmployeeFunc;

}
