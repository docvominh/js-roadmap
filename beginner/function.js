console.log('========== Arguments ==========')

// arguments object
function showArguments() {
    console.log(arguments)

    for (let i = 0; i < arguments.length; i++) {
        console.log(`args[${i}] = ${arguments[i]}`)
    }
}

showArguments('1', 2, true);

// varargs
function showVarargs(...theArgs) {
    theArgs.map((x) => console.log(x));
}

showVarargs('x', 'y', 'z', 1)


console.log('========== Recursion ==========')

function print(x) {
    if (x > 5) {
        return false;
    } else {
        console.log(x)
    }


    print(x + 1)
}

print(0);


console.log('========== Closures ==========')

function parent() {
    let car = 'Ford'

    function child() {
        console.log(`Child drive parent's car ${car}`);
    }

    this.showChild = function showChild() {
        child()
    }

}

let parentObj = new parent();
parentObj.showChild();

console.log('========== Arrow functions ==========')
// Just like forEach in Java
let arrayNumber = [1, 2, 3, 4, 5]

arrayNumber.map(number => {
    console.log(number)
});


console.log('========== Function as argument ==========')
function execute(action){
    action()
}

let action = function (){
    console.log('Action')
}
execute(action)

// Arrow function syntax
execute(() => console.log('Wololo'))