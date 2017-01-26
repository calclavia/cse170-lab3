
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.userName || 'world';

  res.render('index', {
  	'name': name,
  });
};
