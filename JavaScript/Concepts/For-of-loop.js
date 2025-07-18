// It can only be applied on iterables like arrays
// Objects are not iterable but we can use this loop by making some changes


// Object.keys(obj) gives you an array of just the property names (keys)
let obj = { a: 1, b: 2, c: 3 };

for (let key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

// Object.keys will make a array of keys of object


// We can also use Object.values , Object.entries


let obj1 = { a: 1, b: 2, c: 3 };

// Object.entries(obj) returns an array of [key, value] pairs.


for (let [key, value] of Object.entries(obj1)) {
  console.log(`${key} => ${value}`);
}

for (let key of Object.entries(obj1)) {  // In this the key contain both [key , value]
  console.log(key);
} 


// Object.values(obj) returns an array of just the values.
for (let value of Object.values(obj1)) {
  console.log(value);
}


