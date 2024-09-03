import express from 'express';
import homeControllers from '../controllers/homeControllers';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/crud', homeControllers.getCrud);

    router.post('/post-crud', homeControllers.postCrud);
    router.get('/get-crud', homeControllers.displayGetCrud);
    router.get('/edit-crud', homeControllers.getEditCrud);
    router.post('/put-crud', homeControllers.putCrud);
    router.get('/delete-crud', homeControllers.deleteCrud);


    
    return app.use('/', router);
};

module.exports = initWebRoutes;
