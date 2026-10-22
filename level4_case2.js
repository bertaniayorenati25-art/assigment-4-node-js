function validate(object, schema) {
  const errors = [];
for (const key in schema) {
    const rules = schema[key];
    const value = object[key];
    if (rules.required && (value === undefined || value === null)) {
        errors.push({ property: key, reason: "Properti wajib diisi." });
        continue;
    }
    if (value !== undefined && value !== null) {
      if (rules.type && typeof value !== rules.type) {
        errors.push({ property: key, reason: `Tipe data harus ${rules.type}.` });
      }
      if (rules.type === "number" && rules.minValue !== undefined && value < rules.minValue) {
        errors.push({ property: key, reason: `Nilai minimal adalah ${rules.minValue}.` });
      }
    }
  }

  return errors;
}
const schema = {
  name: { required: true, type: "string" },
  age: { required: true, type: "number", minValue: 18 }
};

const invalidUser = { name: "Rian", age: 15 };
console.log("Hasil Validasi:", validate(invalidUser, schema));

