const accountId = 1234
let accountEmail = "workatiya@google.com"
var accountPassword = "12345"
accountCity = "jaipur" 
let accountState

// accountId = 2 // not allowed

accountEmail = "testing@gamil.com"
accountPassword = "123123"
accountCity = "mumbai" 
/* 
prefer not to use var
because of issue is block scope and functional scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
