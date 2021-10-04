var wrapperEle=document.body.querySelector(".wrapper");

var warriors= [

    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },
    {
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
];

for(var i=0; i<warriors.length; i++) {
    var person = document.createElement("div");
    var namePerson = document.createElement("h2");
    var damagePerson = document.createElement("h4");
    var healthPerson = document.createElement("h4");
    var warriorPerson = document.createElement("h4");
    if (warriors[i].damage >= 2 && warriors[i].health >= 10 && warriors[i].warrior === true && warriors[i].name.includes("a")||warriors[i].name.includes("A")) {
        namePerson.innerHTML = "Name: " + warriors[i].name;
        damagePerson.innerHTML = "Damage: " + warriors[i].damage;
        healthPerson.innerHTML = "Health: " + warriors[i].health;
        warriorPerson.innerHTML = "Warrior: " + warriors[i].warrior;
        namePerson.innerHTML= "Name: " + warriors[i].name.fontcolor("red");        // namePerson.innerHTML= warriors[i].name.fontcolor("red");
    //     namePerson.innerHTML= "Name: " + warriors[i].name.fontcolor("red");
    } else if(warriors[i].damage >= 2 && warriors[i].health >= 10 && warriors[i].warrior === true){
        namePerson.innerHTML = "Name: " + warriors[i].name;
        damagePerson.innerHTML = "Damage: " + warriors[i].damage;
        healthPerson.innerHTML = "Health: " + warriors[i].health;
        warriorPerson.innerHTML = "Warrior: " + warriors[i].warrior;
    }

    person.appendChild(namePerson);
    person.appendChild(damagePerson);
    person.appendChild(healthPerson);
    person.appendChild(warriorPerson);
    wrapperEle.appendChild(person);
}



