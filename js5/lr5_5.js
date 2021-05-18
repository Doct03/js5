var human=new Object();

human.firstName="alex"
human.secondName="Jazun";
human.age=27;

human.occupation = new Object();
human.occupation.company="microsoft";
human.occupation.position="Web Developer";

document.write("<p>First name: "+human.firstName);
document.write("<p>Second name: "+human.secondName);
document.write("<p>age: "+human.age+"years old");

document.write("<p>Company: "+human.occupation.company);
document.write("<p>Position: "+human.occupation.position);
