/////////////////// Start Problem 1 /////////////////////
// function revers (str) {
//    return str.split("").reverse().join("-")
   
// } 
// console.log(revers("omar"));
////////////////////////////////////

// function revers (str) {
//    let arr = [];
//    let reverseString = "";
//     for (index = str.length -1;index >= 0; index--){
//         arr.push(str[index])
//     }
//    for(index= 0;index < arr.length; index++){
//         reverseString +=arr[index]
//    }
//    return reverseString
// } 
// console.log(revers("omar"));
///////////////////////// End Problem 1 /////////////////////////



///////////////////////// Start Problem 2 /////////////////////////
// function checked (str1, str2) {

//     if (str1.toLowerCase() == str2.toLowerCase()){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(checked("Eraa", "eraw"));
//////////////////////// End Problem 2 ///////////////////////////





/////////////////////////// Start Problem 3 /////////////////////////////
// function checkedUppercase (string) {
//     let string2 = "";
//     string2 += string.toUpperCase();
    
//     for (let index = 0; index < string.length; index++) {
//         if (string[index] == string2[index]){
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
//     return 

// }
// console.log(checkedUppercase("omaR"));
////////////////// End Problem 3 ////////////////////////







////////////////// Start Problem 4 ////////////////////////
// function numCase (num1, num2, string){
//     return string.slice(num1, num2)
// }
// console.log(numCase(1, 5,"Moamen"));
///////////////////////////////////////////////////
// function stringSlice (pos1, pos2, string){
//     let slicedString = "";
//     for (let index = pos1; index < pos2; index++) {
        
//         slicedString += string[index]
//     }
//     return slicedString
// }
// console.log(stringSlice(0, 5,"Moamen"));
///////////////////////// Start Problem 4 ///////////////////////////// 



//////////////////////////// Start Problem 5 /////////////////////////////////////
// function getFullName (firstName, middleName, lastName){
//     let arrNames = [firstName, middleName, lastName];
//     arrNames = arrNames.join(' ');
//     return arrNames
// }
// console.log(getFullName("omar", "mohamed", "ahmed"));
//////////////////////////////////////////////////////////////
// function getFullName (firstName, middleName, lastName){
//         return `${firstName} ${middleName} ${lastName}`
//     }
//     console.log(getFullName("omar", "mohamed", "ahmed"));
/////////////////////////////// Start Problem 5 /////////////////////////////////



////////////////////////////////// Start Problem 6/////////////////////////////
// function palindromeRevers(str) {
//     let reversStr = str.split("").reverse("").join("")
//     if (reversStr === str) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(palindromeRevers("appa"));
// console.log(palindromeRevers("apps"));

////////////////////////////////// Start Problem 6 //////////////////////////////



////////////////////////////////// Start Problem 7 //////////////////////////////
// function removeSpaces(string) {
    // return string.trim()
// }
// console.log(removeSpaces("  omar  "));

////////////////////////////////// End Problem 7 //////////////////////////////




////////////////////////////////// Start Problem 8 //////////////////////////////
function checkUrl (url){
    let urlStart = url.slice(0, 4);
    let urlEnd = url.slice(-1, 6);
    if (url.include() == urlStart) {
        return true
    } 
}
console.log(checkUrl("ww.moamen.eraa"));


////////////////////////////////// End Problem 8 //////////////////////////////
