var human={
    firstName:"alex",
    secondName:"Jazun",
    age:27,
    occupation:"<img src='Images_LR5/Microsoft.jpg' width='152' height='38'/>",

    show:function(){
        document.write("<p>First name: "+this.firstName);
        document.write("<p>second name: "+this.secondName);
        document.write("<p>Age: "+this.age +"</hr>");
        document.write("<p>Occupation: "+this.occupation);
    },
    changeWork:function(occupation){
        this.occupation=occupation;
    }
}
human.show();
human.changeWork("<img src='Images_LR5/CyberBionic Systematics.jpg'width='152' height='38'>");
human.show();