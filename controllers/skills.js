var Skill = require('../models/skills');

module.exports = {
    index,
    show,
    newSkill,
    createSkill,
    deleteSkill,
    edit,
    updateSkill

}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function createSkill(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    console.log('hi' + req.params.id);
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    var skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill,
        skillIdx: req.params.id
    });
}

function updateSkill(req, res) {
    Skill.updateSkill(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}