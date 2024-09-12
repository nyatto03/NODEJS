import express from 'express';
import homeControllers from '../controllers/homeControllers';
import userControllers from '../controllers/userController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/crud', homeControllers.getCrud);

    router.post('/post-crud', homeControllers.postCrud);
    router.get('/get-crud', homeControllers.displayGetCrud);
    router.get('/edit-crud', homeControllers.getEditCrud);
    router.post('/put-crud', homeControllers.putCrud);
    router.get('/delete-crud', homeControllers.deleteCrud);

    router.post('/api/login', userControllers.handleLogin);
    router.get('/api/get-all-users', userControllers.handleGetAllUser);
    router.post('/api/create-new-user', userControllers.handleCreateNewUser);
    router.put('/api/edit-user', userControllers.handleEditUser);
    router.delete('/api/delete-user', userControllers.handleDeleteUser); // rest API
 


    

    return app.use('/', router);
};

module.exports = initWebRoutes;
