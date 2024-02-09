//function declaration without default parameters
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

noDefaultParams(); // Result: NaN

//
//
//function declaration with default parameters
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams();    //Result: 100

//
//
//class definition No Default Parameter
class NoDefaultParameter {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParameter(1,2,3,false);
console.log(fail.calculate()); // 'The value of bool1 is incorrect'

//
//
//class definition with Default Parameter
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var better = new WithDefaultParams();
better.calculate(); // Result: 6

