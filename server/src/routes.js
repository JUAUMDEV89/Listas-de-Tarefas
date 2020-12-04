const { Router } = require('express');

const UserController = require('./app/controllers/UserController.js');
const SessionController = require('./app/controllers/SessionController.js');
const TaskController = require('./app/controllers/TaskControllers');

const authMiddleware = require('./app/middlewares/auth');

const route = Router();

route.post('/users', UserController.store);
route.post('/sessions', SessionController.register);

route.use(authMiddleware.auth);

route.post('/tasks', TaskController.store);
route.get('/tasks', TaskController.index);
route.delete('/tasks/:id', TaskController.destroy);

module.exports = route;