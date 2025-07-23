console.log("This will execute instanly");

setTimeout(function() {
    console.log("This is a async code ");
}, 5000);

setTimeout( () => {
    console.log("This is also a async code");
}, 6000)

console.log("This will also execute instantly");

