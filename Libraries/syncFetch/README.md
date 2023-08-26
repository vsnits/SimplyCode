
# syncFetch
 A library to broad the standard JS fetches

# Overview
 This creates a new async ExtendFetch
 ```js
  let Fetch = new ExtendFecth("src", function callback(data) {})
 ```
 This executes ExtendFetches in the given order, while the load is still async:
 ```js
  let AnotherFetch = new ExtendFecth("source", function callback(data) {})
  syncFetch([ExtendFetch, AnotherExtendFetch])
 ```
# Contribution
 Follow SimplyCode! contribution guidelines
   
# License
 GNU apgl v3