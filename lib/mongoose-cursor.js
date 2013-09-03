var mongoose = require('mongoose');

mongoose.Query.prototype.paginate = function paginate (page, limit, cb) {
  page = page || 0;
  limit = limit || 10;

  var query = this;
  var model = this.model;
  var skipFrom = page === 0 ? 0 : (page * limit);

  query = query.skip(skipFrom).limit(limit);

  if(cb) {
    query.exec(function(err, docs) {
      if(err) {
        cb(err, null, null);
      } else {
        model.count(query._conditions, function(err, total) {
          if(err) {
            cb(err, null, null);
          } else {
            var next = page < Math.ceil(total/limit) - 1;
            cb(null, docs, {
              data: docs,
              next:  next ? parseInt(page, 10) + 1: undefined
            });
          }
        });
      }
    });
  } else {
    return this;
  }
};
