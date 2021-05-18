var human = {
    firstName: "Alesha",
    secondName: "Jazun",
    age: 27,
    // Вложенный обьект.
    occupation: {
        company: "ZIEIT",
        position: "Teacher"
    },

    occupation1: {
        company: "Microsoft",
        position: "Web Developer"
    }

    
    
};
document.write("<p>First name: " + human.firstName);
document.write("<p>Second name: " + human.secondName);
document.write("<p>Age: " + human.age + " years old");
// Обращение к вложенному объекту.
document.write("<p>Company: " + human.occupation.company);
document.write("<p>Position: " + human.occupation.position);
