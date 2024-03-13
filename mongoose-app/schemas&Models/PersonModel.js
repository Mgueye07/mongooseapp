let mongoose = require("mongoose");

//definition du schema person
let personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: {
    type: [String],
    default: ["Yassa"],
  },
});

//creation du modele person via le schema Person 
let PersonModel = mongoose.model("Person", personSchema);

//instanciation d'un objet via le modele Person
let personne1 = new PersonModel({
  name: "joseph",
  age: 25,
});

//enregistrement de la personne cree
personne1
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

//enregistrement de plusieurs personnes
PersonModel.create([
  { name: "diabel", age: 26, favoriteFoods: ["thieboudjeune", "souloukhou"] },
  { name: "Ayman", age: 26, favoriteFoods: ["thieboudjeune", "souloukhou"] },
  { name: "fallou", age: 21, favoriteFoods: ["thieboudjeune", "souloukhou"] },
])
  .then((persons)=>{
      console.log(persons)
  })
  .catch((err)=>{
       console.error(err);
  });

  //Reccherche de toutes les personnes de la base
  PersonModel.find().then((users)=>{
    users.forEach(user=>console.log('---'+user._id+'---'+user.name));
  }).catch(
    (err)=>{
         console.log(err);
    }
  );

  //Recherche d'une personne
 PersonModel.findOne({_id :"65f0489e0faa58e70439725f"}).then((person)=>{
          console.log('Person researched is :'+person);
  }).catch(
    (err)=>{
         console.log(err);
    }
  );

  //Recherche d'une personne via son Id
 PersonModel.findById("65f0489e0faa58e704397260").then((person)=>{
    console.log('Person researched is :'+person);
}).catch(
(err)=>{
   console.log(err);
}
);


//Modification d'une personne
PersonModel.findOneAndUpdate({name:"diabel"},{age :20},{new:true}).then((doc)=>{
    console.log(doc)
}).catch((err)=>{
    console.log(err);
});

//suppression d'une seule personne
PersonModel.deleteOne({_id : '65f0489e0faa58e704397262'}).then((result)=>console.log(result)).catch((err)=>console.error(err));

//suppression de plusieurs personnes via le nom en commun
PersonModel.deleteMany({name:'diabel'}).then(result=>{console.log(result)}).catch((err)=>console.log(err));



module.exports = mongoose.model("Person", personSchema);
