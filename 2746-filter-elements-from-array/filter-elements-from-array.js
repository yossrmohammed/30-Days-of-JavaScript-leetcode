/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var items=[];
    for(let i=0;i<arr.length;i++){
        let checkValue= fn(arr[i],i);
        if(checkValue){
            items.push(arr[i]);
        }
    }
   return items;
    
};