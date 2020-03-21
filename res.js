'use strict';

exports.sukses = function(rows_value, res) {
  var data = {
      'status': 200,
      'dataJson': rows_value
  };
  // res.json(data);
  res.end(JSON.stringify(data));
};


// Contoh data Json
//     {
//     "first_name":"Afifah ",
//     "last_name": "Ayunda"
//     }