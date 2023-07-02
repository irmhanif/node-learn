const fetchData = (i) => {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve('Done !!'+ i++)
        }, 1520)
    });
    return promise
}

setTimeout(()=> {
    fetchData(1).then(text=> {
        console.log(text);
        return fetchData(2);
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000)

console.log("hi")