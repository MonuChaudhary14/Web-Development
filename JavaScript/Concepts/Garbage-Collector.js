/*
 Garbage Collector in JavaScript
The Garbage Collector (GC) in JavaScript is an automatic memory management system. Its job is to free up memory that's no longer needed so your program doesn't run out of space.

 How it works (in simple terms)
JavaScript automatically allocates memory when you create variables, objects, arrays, etc., and frees memory when it detects that something is no longer reachable (i.e., not used anymore).


Unlike some languages (e.g., C++ with delete, or Python with gc.collect()), JavaScript does not give you direct control. It's completely automatic.



Most modern JavaScript engines (like V8 used in Chrome and Node.js) use Mark-and-Sweep algorithm.

Mark-and-Sweep Process:
Mark all reachable objects starting from "roots" (like window, stack variables, closures).

Sweep through memory and remove all unmarked (unreachable) object



*/