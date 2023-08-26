# JCtab
   A JS function which turns a text into code
   
# Overview
   JCtab contains a number of constant functions, which are the part of single purpose. <br>
   Turn given text into readable JS/C code!
 ```js
   JCtab("text", tab, space, ?separator)
   // returns edited text
   // expected code errors showed in the console
 ```
   Comments and quoted text are ignored, zero-level functions <br>
   divided with specified separator (`;\n\n` by default)
   ## Coding style note
 ```js
   // don't write like this at zero level
   try { "do something" } catch { "error handle" }
  ```
   `Warning!` With separator the expression above turns into
 ```js
   try { "do something" };
   
   catch { "error handle" }
 ```
   Write instead:
 ```js
   (function() { 
      try { "do something" } catch { "error handle" }
     })()
 ```
   JCtab is a helpful tool, but it does not work instead of you.
   Review result after JCtab work is complete.
   
# Contributing library
   Rather than contributing, leave an issues when possible.
   This better helps. Seriously.

# License
   GNU apgl (of course)
