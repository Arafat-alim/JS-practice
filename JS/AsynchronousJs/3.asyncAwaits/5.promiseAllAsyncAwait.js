async function getData(){
    const data = Promise.all([
        await fetch(API-URL1),
        await fetch(API-calls),
        ....
    ])
}