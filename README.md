mongoose-cursor
===============

Based on https://github.com/edwardhotchkiss/mongoose-paginate


```javascript
An example extracted from Parkuik (www.parkuik.com) source code:

exports.parkingsPagination = function(req, res) {
  var page = req.query.page;
	var Parking = mongoose.model('Parking');
	Parking
		.find()
		.paginate(page, 10, function(err, results, total) {
			res.json(total);
			return;
		})
}
