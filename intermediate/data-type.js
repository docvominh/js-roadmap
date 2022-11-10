// object
console.log('========== Object ==========')
let person = {
    name: "Minh",
    age: 32,
    toString: function () {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

person.toString();

// define property id and prevent value update
Object.defineProperty(person, 'id', {
    value: "999999999",
    writable: false
});

person.id = "12345667";

console.log(person.id);

// Date
console.log('========== Date ==========')

let current = new Date();
console.log(current)
console.log(current.toString())
console.log(Date.now()) // Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

let myBirthDay = new Date(Date.UTC(1990,2,5));
console.log(myBirthDay)


// Array
console.log('========== Array ==========')

let numberArray = [1,2,3,4,5,6,7,8];
console.log(`Array length: ${numberArray.length}`)
numberArray.push(9)
console.log(`Array length: ${numberArray.length}`)
let lastElement = numberArray.pop()
console.log(`Array length: ${numberArray.length}`)
console.log(`Last removed element: ${lastElement}`)

console.log(`Value at index 0 ${numberArray[0]}`)
console.log(`Index of value 1 ${numberArray.indexOf(1)}`)
console.log(`Not found value return ${numberArray.indexOf(9)}`)


// Map
console.log('========== Map ==========')

let numberMap = new Map();
numberMap.set(1,'one')
numberMap.set(3,'three')
numberMap.set(2,'two')

console.log(numberMap)
console.log(numberMap.keys())
console.log(numberMap.values())

console.log(`Map size ${numberMap.size}`)
console.log(`Value with key = 1: ${numberMap.get(1)}`)
numberMap.delete(1)
console.log(`Value with key = 1 not found: ${numberMap.get(1)}`)

console.log('========== JSON ==========')

let jsonString = '{"name" : "Minh", "age" : "32" }'
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject)
jsonObject.id = '12345678'
jsonString = JSON.stringify(jsonObject);
console.log(jsonString)