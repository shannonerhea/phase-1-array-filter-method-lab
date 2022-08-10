// Code your solution here








//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
/**findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match */

function findMatching(drivers, str) {
    //let driver = driver.filter(driverNme => driverName === str)
        return  drivers.filter(function(drivers){
        drivers.toLowerCase() === str.toLowerCase()
    });
}
// function findMatching(arr, str) {
//     //let driver = driver.filter(driverNme => driverName === str)
//         return  arr.filter(function(str){
//         return arr
//     });
// }
// let newDriver = driver.filter(driverNme => driverName === str)

      /** fuzzyMatch()
      4) returns a driver if beginning provided letters match
      5) does not return drivers if only middle or ending letters match
      6) does not return drivers if only middle or ending letters match */
