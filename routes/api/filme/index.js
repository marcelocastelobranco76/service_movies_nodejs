const routes = require('express').Router();

const get = require('../../../controllers/filme/get');
const create = require('../../../controllers/filme/create');
const update = require('../../../controllers/filme/update');
const remove = require('../../../controllers/filme/delete');

routes.get('/:id', get);
routes.post('/', create);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;
