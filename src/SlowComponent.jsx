const waitingForSomething = (ms) => {
    const start = Date.now();
    console.log(start);
    let now =start;

    while(now - start <ms){
        now = Date.now();
        console.log(now);

    }
}

export default function SlowComponent () {
    waitingForSomething(1000);
    return null;
}