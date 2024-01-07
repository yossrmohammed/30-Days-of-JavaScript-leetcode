/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var items=[];
   items= arr.filter(fn);
   return items;
    
};