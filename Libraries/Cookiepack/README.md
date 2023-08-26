# CookiePack
   A library to use cookies with respect of privacy
# Guide note
   ## Usage
    Create object:
    ```js
    var localstr = new CookiePack("local") // localStorage shield
    var sessionstr = new CookiePack("session") // sessionStorage shield
    var map = new CookiePack(false) // without cross-page data (fast & private use)
    ```
   Work with object: 
   ```js
    var storage = new CookiePack() // "local" by default
    storage.locally // uses cached data or not
    /* stored data (Map structure) */
    storage.data // locally saved data
    storage.localdata // data of localStorage
    storage.sessiondata // data of session storage
    /* ----- */
    storage.type() // type of the storage used
   ```
   Classic storage operations:
   ```js
    storage.set("name", {item}) // remember
    storage.set("text", "item", false) // without stringifying
    storage.get("name") // {}
    storage.get("text", false) // get without parsing
    storage.get("not-exists", true, "{object}") // get a special null value ({object})
    storage.remove("name") // remove
    storage.clear() // remove all the items
   ```
   
   Conflicts:
     CookiePack shares local data between the objects:
     ```js
     (new CookiePack()).set("example", "data..")
     (new CookiePack()).get("example") // "data.."
     ```

   ## Contribution
   Please follow common SimplyCode! contribution guidelines

# License
    GNU v3
