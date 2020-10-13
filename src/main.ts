const f = (a: number, b: number) => {
    return a + b
}

const example: Example = {
    bar: 0, foo: 0
}

interface Example {
    bar: number,
    foo?: number
}

interface PersonIface {
    name: string
    age: number
}

class PersonBuilder {
    protected entity: PersonIface

    constructor() {
        this.entity = {
            age: 0,
            name: ""
        }
    }

    age(age: number): this {
        this.entity.age = age
        return this
    }

    name(name: string): this {
        this.entity.name = name
        return this
    }

    build(): Entity {
        return this.entity
    }
}

class Entity {
    name: string
    age: number

    public toString(): string {
        return `[Object] ${this.name} - ${this.age}`
    }
}

class Person extends Entity implements PersonIface {
    constructor() {
        super();
    }
    public toString = (): string => {
        return super.toString()
    }
}

interface IEngine {
    drive(): void

    startEngine(): void

    stopEngine(): void

    isStarted(): boolean
}

class Engine {
    public engineStarted: boolean

    public isStarted(): boolean {
        return this.engineStarted
    }
}

class Car extends Engine implements IEngine {
    startEngine(): void {
        console.log("The car started")
    }

    drive(): void {
        console.log("Driving the car")
    }

    stopEngine(): void {
        console.log("The car stopped")
    }
}

class Truck extends Engine implements IEngine {
    constructor() {
        super();
    }
    startEngine(): void {
        console.log("The truck started")
    }

    drive(): void {
        console.log("Driving the truck")
    }

    stopEngine(): void {
        console.log("The truck stopped")
    }
}

class Vehicle {
    private machine: IEngine

    constructor(machine: IEngine) {
        this.machine = machine
    }

    drive() {
        if (!this.machine.isStarted()) {
            this.machine.startEngine()
        }

        this.machine.drive()
    }

    stop() {
        if (this.machine.isStarted()) {
            this.machine.stopEngine()
        }
    }
}

const g = (entity: Entity) => {
    console.log("" + entity.toString())
}

console.log(f(4, 3))
const person: Person = new PersonBuilder().age(23).name("Bob").build()
g(person)

const vehicle = new Vehicle(new Car())

const vehicles = new Array<Vehicle>()
vehicles.push(new Vehicle(new Car()), new Vehicle(new Truck()))

vehicles.forEach(v => v.drive())
