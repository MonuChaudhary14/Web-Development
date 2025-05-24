// It can only be applied on iterables like arrays
// Objects are not iterable but we can use this loop by making some changes



let obj = { a: 1, b: 2, c: 3 };

for (let key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

let obj1 = { a: 1, b: 2, c: 3 };

for (let [key, value] of Object.entries(obj1)) {
  console.log(`${key} => ${value}`);
}

for (let key of Object.entries(obj1)) {
  console.log(key);
}

