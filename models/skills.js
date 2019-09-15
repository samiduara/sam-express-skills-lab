const skills = [
  {
      name: 'Node.js', 
      description: 'Node.js is a platform built on Chrome JavaScript runtime for easily building fast and scalable network applications',
      level: 3
  },
  {
      name: 'HTML', 
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
      level: 5
  },

  {
    name: 'python', 
    description: 'Python is a general purpose and high level programming language. You can use Python for developing desktop GUI applications, websites and web applications. Also, Python, as a high level programming language, allows you to focus on core functionality of the application by taking care of common programming tasks.Oct 3, 2017',
    level: 5
},  
  {
      name: 'CSS', 
      description: 'make the website look beutiful',
      level: 9
  }
];

module.exports = {
  getAll,
  getOne, 
  create,
  deleteOne,
  updateSkill
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill) {
  skills.push(skill);
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function updateSkill(id, skill) {
  skills[id] = skill;
}