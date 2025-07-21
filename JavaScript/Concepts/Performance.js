// he performance.now() function in JavaScript is used to get a high-resolution timestamp, measured in milliseconds, for precise performance measurements (e.g., how long a function takes to run). It is part of the Performance API.

let time = performance.now();

// A DOMHighResTimeStamp, which is a floating-point number.

// It represents the number of milliseconds (with microsecond precision) since the time origin (performance.timeOrigin).

// Unlike Date.now(), which gives wall-clock time, performance.now() is not affected by system clock changes.