// Create validate(object, schema). The schema must support required properties, data types, and minimum values for numbers. Return all validation errors, including the property name and reason.

function validate(object, schema) {
    const errors = [];

    for (const field in schema) {
        const rules = schema[field];
        const value = object ? object[field] : undefined;

        const isMissing = value === undefined || value === null;

        if (rules.required && isMissing) {
            errors.push({
                property: field,
                reason: `Property '${field}' is required.`
            });
            continue;
        }

        if (!rules.required && isMissing) {
            continue;
        }

        if (rules.type) {
            const actualType = typeof value;
            if (actualType !== rules.type) {
                errors.push({
                    property: field,
                    reason: `Property '${field}' must be of type '${rules.type}', but got '${actualType}'.`
                });
                continue;
            }
        }

        if (rules.type === 'number' && rules.min !== undefined) {
            if (value < rules.min) {
                errors.push({
                    property: field,
                    reason: `Property '${field}' must be at least ${rules.min}, but got ${value}.`
                });
            }
        }
    }

    return errors;
}


const userSchema = {
    username: { type: 'string', required: true },
    age: { type: 'number', required: true, min: 18 },
    score: { type: 'number', required: false, min: 0 }
};

const invalidUser = {
    age: 15,
    score: "high"
};

const validationErrors = validate(invalidUser, userSchema);

console.log("Validation Errors:");
console.log(validationErrors);