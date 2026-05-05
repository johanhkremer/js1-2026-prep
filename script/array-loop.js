let fruits = ["banana", "orange", "kiwi", "apple"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/*
Ordning
1. i=x
2. i <= fruits.length; om true:
3. console.log(fruits[i])
4. i++
5. i <= fruits.length; om true: -> kör loopen igen
*/

//for-loop med if-villkor
const names = ["Anna", "Johan", "Sara", "Erik"]

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Johan") {
        console.log("⭐ VIP-hälsning till Johan!")
    } else {
        console.log("Hej " + names[i] + "!")
    }
}

const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 25, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 22, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 24, active: true, course: "React" },
    { id: 5, name: "Elias", age: 26, active: false, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 21, active: true, course: "JavaScript" },
    { id: 7, name: "Gabriel", age: 23, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 22, active: false, course: "HTML/CSS" },
    { id: 9, name: "Isak", age: 27, active: true, course: "JavaScript" },
    { id: 10, name: "Julia", age: 24, active: true, course: "React" },
    { id: 11, name: "Kevin", age: 23, active: false, course: "HTML/CSS" },
    { id: 12, name: "Lina", age: 21, active: true, course: "JavaScript" },
    { id: 13, name: "Marcus", age: 25, active: true, course: "React" },
    { id: 14, name: "Nora", age: 22, active: true, course: "JavaScript" },
    { id: 15, name: "Oskar", age: 26, active: false, course: "HTML/CSS" },
    { id: 16, name: "Petra", age: 24, active: true, course: "React" },
    { id: 17, name: "Quentin", age: 23, active: true, course: "JavaScript" },
    { id: 18, name: "Rashid", age: 27, active: false, course: "HTML/CSS" },
    { id: 19, name: "Sara", age: 22, active: true, course: "React" },
    { id: 20, name: "Tom", age: 25, active: true, course: "JavaScript" }
]

for (let i = 0; i < students.length; i++) {
    if (students[i].course === "JavaScript") {
        console.log(students[i].name, "is studying javascript ⚡️")
    }

    if (students[i].course === "React") {
        console.log(students[i].name, "is studying react ⚛")
    }

}

const student = { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" }

//for-in loop (object)
for (let key in student)
    console.log(key, student[key])

//for-of loop (array)
for (let student of students)
    console.log(student)

//Break and Continue
for (let i = 0; i < students.length; i++) {
    const student = students[i]

    if (!student.active) {
        console.log(`❌ Hoppar över ${student.name} eftersom studenten inte är aktiv`)
        continue
    }

    if (student.course === "React") {
        console.log(`✋ Hittade första React-studenten: ${student.name}`)
        break
    }

    console.log(`Kollar aktiv student: ${student.name}`)
}



for (let i = 10; i >= 1; i--) {
    console.log(i)
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

let stars = ""

for (let i = 1; i <= 5; i++) {
    stars += "*"
    console.log(stars)
}