/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let myPromies= new Promise ((resolve,reject)=>{
        setTimeout(()=>{resolve()},millis)
    })
    return myPromies
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */