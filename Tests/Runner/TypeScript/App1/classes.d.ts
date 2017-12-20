/// <reference path="./bridge.d.ts" />

declare namespace Classes {
    export interface Animal {
        GetName(): string;
        Move(): number;
    }
    export interface AnimalFunc extends Function {
        prototype: Animal;
        new (): Animal;
        ctor: {
            new (): Animal
        };
        $ctor1: {
            new (name: string): Animal
        };
    }
    var Animal: AnimalFunc;

    export interface MovePoint {
        Point: Classes.Point;
        Move(dx: number, dy: number): void;
    }
    export interface MovePointFunc extends Function {
        prototype: MovePoint;
        new (): MovePoint;
    }
    var MovePoint: MovePointFunc;

    export interface Point {
        X: number;
        Y: number;
        getHashCode(): Classes.Point;
        equals(o: Classes.Point): Boolean;
        $clone(to: Classes.Point): Classes.Point;
    }
    export interface PointFunc extends Function {
        prototype: Point;
        $ctor1: {
            new (x: number, y: number): Point
        };
        new (): Point;
        ctor: {
            new (): Point
        };
    }
    var Point: PointFunc;

    export interface StaticClass {
    }
    export interface StaticClassFunc extends Function {
        prototype: StaticClass;
        new (): StaticClass;
        Move(p: Classes.Point, dx: number, dy: number): Classes.Point;
    }
    var StaticClass: StaticClassFunc;

    export interface Snake extends Classes.Animal {
        Move(): number;
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

    export interface Dog extends Classes.Animal {
        Move$1(): number;
    }
    export interface DogFunc extends Function {
        prototype: Dog;
        new (name: string): Dog;
    }
    var Dog: DogFunc;

}
