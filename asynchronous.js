const stock =
{
    fruit: ["banana", "mango", "apple", "orange"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup"],
    toppings: ["chocapic", "oreo", "candy"]
};
let is_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => { //search more about promise
        if (is_open) {
            setTimeout(() => {
                resolve(work());
            }, time);

        } else {
            reject(console.log("our shop is closed"));
        }
    });
};

order(2000, () => console.log(stock.fruit[0]+" was selected"))

.then(()=>{
    return order(2000,()=> console.log("The production has started"));
})

.then(()=>{
    return order(2000,()=> console.log("The "+stock.fruit[0]+" was chopped"));
})

.then(()=>{
    return order(1000,()=> console.log(stock.liquid[0]+" and "+stock.liquid[1]+" was added "));
})

.then(()=>{
    return order(1000,()=> console.log("start the machine"));
})

.then(()=>{
    return order(3000,()=> console.log("ice cream placed on "+stock.holder[0]));
})

.then(()=>{
    return order(2000,()=> console.log("Ice cream was served"));
})

