# Comparelib
 A library for JS functions speed comparison
# Overview
 ```js
 function example(a) { 
   var i = 0; while(i < a) { i++ }
    }
 ```
 Measure execution time like this:
 ```js
 example.calltime(10)
 // logs execution time in the console
 ```
 Where the argumets of `calltime` are the same to function arguments.
 ```js
 example.applytime([10])
 ```
 Does the same, but takes arguments as an array
 ```js
 example.compareto(function(a) {
   var i = 0; while(i < a) { i *= 2 }
   }, [10], [10])
 // f1.compareto(f2, a1, a2)
 ```
 Logs the time for two functions by taking arguments as arrays.
   
# Contribution
 Follow common SimplyCode! contribution guidelines
   
# License
 GNU apgl v3
