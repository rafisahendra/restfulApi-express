'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/siswa')  //Tampil data
        .get(todoList.siswa);

    app.route('/siswa/:id') //get data ById 
        .get(todoList.siswaGetById);

    app.route('/siswa')  // Simpan data
        .post(todoList.siswaAdd);

    app.route('/siswa/:id') //Update dengan (method:put)
        .put(todoList.siswaUpdate);

    app.route('/siswa/:id') //delete data ById (mehod:delete)
        .delete(todoList.siswaDelete);

    // app.route('/siswaUpdate/:id') //Update 
    //      .post(todoList.siswaUpdate);

    // app.route('/siswaDelete/:id') //delete 
    //     .get(todoList.siswaDelete);
};