var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.updateTask = function(req, res) {
  knex('tasks').where('id', '=', req.body.task_id).update({
    [req.body.fieldtype]: req.body.newCode,
    // TODO versuchen das zu vermeiden eig kann die datenbank das von alleine
    updated_at: knex.fn.now()
  }).then(() => {
    res.json({success: true, message: 'ok'}); // respond back to request
  });
}

exports.addTask = function(req, res) {
  knex('tasks').insert({name: req.body.name}).then(() => {
    res.json({success: true, message: 'ok'}); // respond back to request
  });
}
