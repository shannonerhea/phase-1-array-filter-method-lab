// Code your solution here








//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
/**findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match */

// function findMatching(drivers, str) {
//     //let driver = driver.filter(driverNme => driverName === str)
//         return drivers.filter(driver => {
//         driver.toLowerCase() === str.toLowerCase()
//     });
// }
// function findMatching(arr, str) {
//     //let driver = driver.filter(driverNme => driverName === str)
//         return  arr.filter(function(str){
//         return arr
//     });
// }
//let newDriver = driver.filter(driverNme => driverName === str)
const findMatching = (array, name) => {
    const newArray = array.filter(name2 => name2.toUpperCase() === name.toUpperCase())
    return newArray
}

      /** fuzzyMatch()
      4) returns a driver if beginning provided letters match
      5) does not return drivers if only middle or ending letters match
      6) does not return drivers if only middle or ending letters match */
    //   _function fuzzyMatch(driver, name) {
    //      fuzDriver = driver.filter(function(something){
    //         return something.slice(0) === name.slice(0);

    //     });
    //   };
      // _function fuzzyMatch (arr,str){
      //   return arr.filter(element =>
      //   element.slice(0,1) === str.slice(0,1))
      //   }
const fuzzyMatch = (arr, str) => {
  return arr.filter(ele => ele.slice(0, 1) === str.slice(0, 1))
};
        // function matchName(arr, str){
        //     return arr.filter(function(arr){
        //       return arr.str === str
        //     })
        //   }
          const matchName = (arr, name) =>{
            return arr.filter(function(driver){
              return driver.name === name
            })
          }
// const matchName = (arr, str) => {
//   return arr.filter(function(arr) {
//     return arr.str === str
//   });
// };
