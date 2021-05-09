let numOfPersons = 6,
    tallOfFence = 5,
    widthValid = 0,
    tallOfEachPerson = [7, 6, 8, 9, 10, 5];

    tallOfEachPerson.forEach((person_i)=>{
        if (person_i<=tallOfFence) widthValid++;
        else widthValid+=2;
    })
console.log(widthValid)