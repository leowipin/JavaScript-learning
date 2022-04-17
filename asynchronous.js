const stock =
{
    fruit: ["banana", "mango", "apple", "orange"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup"],
    toppings: ["chocapic", "oreo", "candy"]
};
let is_open = false;

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

order(2000, () => console.log(stock.fruit[0]+" was selected"));