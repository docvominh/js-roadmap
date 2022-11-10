Refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values

### Dynamic and weak typing

JavaScript is a dynamic language with dynamic types.

Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
``` 

### Primitive values

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th><code>typeof</code> return value</th>
      <th>Object wrapper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#null_type">Null</a></td>
      <td><code>"object"</code></td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><a href="#undefined_type">Undefined</a></td>
      <td><code>"undefined"</code></td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><a href="#boolean_type">Boolean</a></td>
      <td><code>"boolean"</code></td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a></td>
    </tr>
    <tr>
      <td><a href="#number_type">Number</a></td>
      <td><code>"number"</code></td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a></td>
    </tr>
    <tr>
      <td><a href="#bigint_type">BigInt</a></td>
      <td><code>"bigint"</code></td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><code>BigInt</code></a></td>
    </tr>
    <tr>
      <td><a href="#string_type">String</a></td>
      <td><code>"string"</code></td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a></td>
    </tr>
    <tr>
      <td><a href="#symbol_type">Symbol</a></td>
      <td><code>"symbol"</code></td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"><code>Symbol</code></a></td>
    </tr>
  </tbody>
</table>

### Objects

In JavaScript, objects can be seen as a collection of properties.

```js
let person = {
    name: "Minh",
    age: 32,
    toString: function () {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}
```


### Date
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

```js
let current = new Date();
console.log(current) // 2022-11-10T04:04:06.204Z
console.log(current.toString()) // Thu Nov 10 2022 11:04:06 GMT+0700 (Indochina Time)

// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
console.log(Date.now()) //1668053046206

// in javascript, month start from 0 -> 11
let myBirthDay = new Date(Date.UTC(1990,2,5));
console.log(myBirthDay) // 1990-03-05T00:00:00.000Z

```

### Collection
#### Array

```js
let numberArray = [1,2,3,4,5,6,7,8];
console.log(`Array length: ${numberArray.length}`) // Array length: 8
numberArray.push(9)
console.log(`Array length: ${numberArray.length}`) // Array length: 9
let lastElement = numberArray.pop()
console.log(`Array length: ${numberArray.length}`) // Array length: 8
console.log(`Last removed element: ${lastElement}`) // Last removed element: 9

console.log(`Value at index 0 ${numberArray[0]}`)               // Value at index 0 1
console.log(`Index of value 1 ${numberArray.indexOf(1)}`)       // Index of value 1 0
console.log(`Not found value return ${numberArray.indexOf(9)}`) // Not found value return -1
```

#### Map


```js
let numberMap = new Map();
numberMap.set(1,'one')
numberMap.set(3,'three')
numberMap.set(2,'two')

console.log(numberMap)          // Map(3) { 1 => 'one', 3 => 'three', 2 => 'two' }
console.log(numberMap.keys())   // [Map Iterator] { 1, 3, 2 }
console.log(numberMap.values()) // [Map Iterator] { 'one', 'three', 'two' }

console.log(`Map size ${numberMap.size}`)
console.log(`Value with key = 1: ${numberMap.get(1)}`)
numberMap.delete(1)
console.log(`Value with key = 1 not found: ${numberMap.get(1)}`)
```

#### Json

JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages.

```js
let jsonString = '{"name" : "Minh", "age" : "32" }'
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject)                 // { name: 'Minh', age: '32' }
jsonObject.id = '12345678'
jsonString = JSON.stringify(jsonObject);
console.log(jsonString)                 // {"name":"Minh","age":"32","id":"12345678"}
```