// Implement deepClone(value) for nested objects and arrays containing primitive values. Do not use JSON conversion or structuredClone(). Demonstrate that modifying the clone does not change the original.
function deepClone(value){
    if (value === null || typeof value !== "object"){
        return value;
    }

    const clone = Array.isArray(value) ? [] : {};

    for (const key in value){
        if (Object.prototype.hasOwnProperty.call(value, key)){
            clone[key] = deepClone(value[key])
        }
    }
    return clone;
}

const original = {
    name: "Hp Smasnug",
    settings: {
        theme: "dark",
        notifications: true
    }, 
    apps: [
        {
            id: 1,
            name: "Duolingo"
        },
        {
            id: 2,
            name: "Forest"
        }
    ]
};

const clone = deepClone(original);

clone.settings.theme = "light";
clone.apps[0].name = "Whatsapp";
clone.name = "Samsung S25";

console.log("==============ORIGINAL==============")
console.log(original);

console.log("==============CLONE==============")
console.log(clone)