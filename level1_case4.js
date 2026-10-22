const book = {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    year: 2005
};

function getProperty(object, key) {
    return object[key];

}

console.log(getProperty(book, "title"));
console.log(getProperty(book, "year"));