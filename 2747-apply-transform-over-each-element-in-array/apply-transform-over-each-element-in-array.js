/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var items =[]
    arr.forEach((val,index)=>{
        items.push(fn(val,index))
    })
    return items;
};