const dog = {
  name: "Freida",
  color: "brown/black",
  hunger: 40,
  mood: "feisty",
  age: 9,
};

dog["nickname"] = "Isru ";
dog.nickname = "Puppers";

delete dog.mood;
console.log(dog);
