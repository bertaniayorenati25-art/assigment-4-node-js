function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));

    }

    const copy = {};
    for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            copy[key] = deepClone(value[key]);
        }
    }
    return copy;
}

const original = {a:1, b: {c:2}, d:[3,4]};
const cloned = deepClone(original);

cloned.b.c = 99;
cloned.d.push(5);

console.log("Original:", original);
console.log("Cloned:", cloned);     