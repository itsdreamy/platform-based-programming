// Create a function that wraps an object in a Proxy. Record property additions, updates, and deletions, including the property name, previous value, and new value. Track top-level properties only.

function createTrackedObject(targetObject) {
    const changes = [];

    const handler = {
        set(target, property, value, receiver) {
            const isExisting = Object.prototype.hasOwnProperty.call(target, property);
            const previousValue = target[property];

            const success = Reflect.set(target, property, value, receiver);

            if (success) {
                if (!isExisting) {
                    changes.push({
                        type: 'ADDITION',
                        property,
                        previousValue: undefined,
                        newValue: value
                    });
                } else if (previousValue !== value) {
                    changes.push({
                        type: 'UPDATE',
                        property,
                        previousValue,
                        newValue: value
                    });
                }
            }

            return success;
        },

        deleteProperty(target, property) {
            const isExisting = Object.prototype.hasOwnProperty.call(target, property);
            const previousValue = target[property];

            const success = Reflect.deleteProperty(target, property);

            if (success && isExisting) {
                changes.push({
                    type: 'DELETION',
                    property,
                    previousValue,
                    newValue: undefined
                });
            }

            return success;
        }
    };

    const proxy = new Proxy(targetObject, handler);

    return { proxy, changes };
}

const initialData = { name: "Alice", age: 25 };
const { proxy, changes } = createTrackedObject(initialData);

proxy.role = "Developer";
proxy.age = 26;

delete proxy.name;

console.log("Recorded Changes:");
console.log(changes);

console.log("\nFinal Object State:");
console.log(proxy);