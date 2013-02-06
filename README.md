mongoose-cursor
===============

Based on https://github.com/edwardhotchkiss/mongoose-paginate

An example extracted from Parkuik (www.parkuik.com) source code:

```javascript
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
```

The structure for the response (for example, if you want to use res.json()):

```json
{
	data: [
		...
	],
	next: 1
}
