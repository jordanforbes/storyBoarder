//story skeletonizer

//1st milestone: a way to group characters into scenes and put scenes in order


//themes

//questions
//what is the story about?
//who are the characters?
//what themes are inherent to this conflict?
//where will the story end?
//what obstacles will arise between the protagonist and that end point?


//story components
storyParts=[
  "characters","setting","plot","conflict","resolution"
]

//story structure

structure=[
  "exposition","rising action", "climax", "falling action", "denouement"
]

//character object. I need to fix this syntax.

function character(name, age, gender, role, traits, relationships, scenes){
  this.name = name;
  this.age = age; //i think i need to specify this as an integer
  this.gender = gender;
  this.role = role; //importance
  this.traits = [];
  this.relationships = [];
  this.scenes = scenes;
  //friends
  //enemies
}

function scene(active, reactive, setting, characters){
  this.active= [goal, conflict, disaster];
  this.reactive= [reaction, dilemma, decision];
  this.setting = setting;
  this.characters = [];
}

function setting(location, description){
  this.location = location;
  this.description = description;
}
