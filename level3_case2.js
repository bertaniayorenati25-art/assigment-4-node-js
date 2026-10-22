function groupByMajor (students) {
    return students.reduce ((grouped, student) => {
        const {major} = student;
        if (!grouped[major]) {
            grouped[major] = [];
        }
        grouped[major].push(student);
        return grouped;
    }, {});
}

const studentList = [
    {name: "Bibil", major: "Informatika" },
    {name: "Bila", major: "Informatika" },
    {name: "Tania", major: "Sistem informasi" }
    
];

console.log(groupByMajor(studentList));