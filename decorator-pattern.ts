// Decorator pattern
// What is decorator pattern?
// Decorator pattern is a design pattern that allows you to add new functionality to an object without changing its structure.
// It is a structural pattern that is used to extend the functionality of a class without modifying its code.

// Logger decorator

interface ILogger{
    log(message: string): void;
    error(message: string): void;
}


// Example usage
const logger: ILogger = {
    log: (msg) => console.log(msg),
    error: (msg) => console.error(msg),
}

// Decorator factory: pass the logger once here; it is injected into the method when called
function Logger() {
    return function <This, Args extends any[], Return>(
        target: (this: This, ...args: [...Args, ILogger]) => Return,
        context: ClassMethodDecoratorContext<This, (this: This, ...args: [...Args, ILogger]) => Return>
    ): (this: This, ...args: Args) => Return {
        return function (this: This, ...args: Args): Return {
            try {
                return target.call(this, ...args, logger)
            } catch (error) {
                logger.error(`Error, something went wrong: ${error}`)
                throw new Error("Something went wrong")
            }
        }
    }
}

class AgeCalculator {
    constructor() {}

    @Logger()
    calculateAge(age: number, logger?: ILogger) {
        logger!.log(`Calculating age: ${age}`)
        if (age === 0) {
            throw new Error("Age cannot be 0")
        }
        return age / 2
    }
}

const calculator = new AgeCalculator()
console.log(calculator.calculateAge(0)) // Logging: calculateAge → 26