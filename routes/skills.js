var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill);
router.get('/:id', skillsCtrl.show);
router.get('/:id/edit', skillsCtrl.edit);

router.post('/', skillsCtrl.createSkill);
router.delete('/:id', skillsCtrl.deleteSkill);
router.put('/:id', skillsCtrl.updateSkill);

module.exports = router;