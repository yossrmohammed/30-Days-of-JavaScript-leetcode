/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let originalValue=init
    return {
       increment: ()=>{
          return  ++originalValue;
       },
       decrement:()=>{
           return --originalValue;
       },
       reset: ()=>{
           return (originalValue=init);
       }

    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */