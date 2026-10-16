
let graves = [
    {
        id: 1,
        name: "Ahmad",
        birthDate: "1950-05-10",
        deathDate: "2020-03-15",
        section: "A",
        graveNumber: 101,
        visitors: [
            { name: "Sara", date: "2020-04-01" },
            { name: "Omar", date: "2020-06-10" },
            { name: "Sara", date: "2021-01-15" }
        ]
    },
    {
        id: 2,
        name: "Mohammad",
        birthDate: "1940-08-20",
        deathDate: "2018-11-05",
        section: "A",
        graveNumber: 102,
        visitors: [
            { name: "Lina", date: "2019-01-10" }
        ]
    },
    {
        id: 3,
        name: "Khaled",
        birthDate: "1960-02-12",
        deathDate: "2022-07-20",
        section: "B",
        graveNumber: 201,
        visitors: [
            { name: "Noor", date: "2022-08-01" },
            { name: "Ahmad", date: "2023-03-10" },
            { name: "Lina", date: "2024-05-15" },
            { name: "Sara", date: "2025-01-20" }
        ]
    },
    {
        id: 4,
        name: "Mahmoud",
        birthDate: "1970-12-01",
        deathDate: "2020-09-25",
        section: "B",
        graveNumber: 202,
        visitors: []
    },
    {
        id: 5,
        name: "Yousef",
        birthDate: "1955-04-18",
        deathDate: "2018-06-30",
        section: "A",
        graveNumber: 103,
        visitors: [
            { name: "Omar", date: "2018-07-15" },
            { name: "Noor", date: "2019-02-10" }
        ]
    }
];

function calculateAge(graves) {

    graves.forEach(grave => {
        let birth = new Date(grave.birthDate);
        let death = new Date(grave.deathDate);

        let age = death.getFullYear() - birth.getFullYear();

        if (
            death.getMonth() < birth.getMonth() ||
            (
                death.getMonth() === birth.getMonth() &&
                death.getDate() < birth.getDate()
            )
        ) {
            age--;
        }

        grave.age = age;
    });

    return graves;
}

console.log(calculateAge(graves));

function getEmptyGraves(graves, section) {
    let sectionGraves = graves.filter(grave => grave.section === section);

    if (sectionGraves.length === 0) {
        return [];
    }


    let numbers = sectionGraves.map(
        grave => grave.graveNumber
    );

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);

    let emptyGraves = [];

    for (let i = min; i <= max; i++) {
        if (!numbers.includes(i)) {
            emptyGraves.push(i);
        }
    }

    return emptyGraves;
}

console.log(getEmptyGraves(graves, "A"));



function getDeceasedByYear(grave, year) {
    return grave.filter(grave => {
        return new Date(grave.deathDate).getFullYear
            () === year;
    });
}
console.log(getDeceasedByYear(graves, 2020));


function sortGravesByVisites(graves) {
    return [...graves].sort((a, b) => {
        return b.visitors.length - a.visitors.length;
    });
}
console.log(sortGravesByVisites(graves));

function getVisitsBetweenDates(graves, startDate, endDate) {
    let visits = [];

    graves.forEach(grave => {
        grave.visitors.forEach(visitor => {
            if (
                visitor.date >= startDate &&
                visitor.date <= endDate
            ) {
                visits.push({
                    deceasedName: grave.name,
                    section: grave.section,
                    graveNumber: grave.graveNumber,
                    visitorName: visitor.name,
                    visitDate: visitor.date
                });
            }
        });
    });

    return visits;
}

console.log(
    getVisitsBetweenDates(
        graves,
        "2020-01-01",
        "2022-12-31"
    )
);









