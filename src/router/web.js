import express from 'express';
import home_controller from '../controller/homeController'
const router = express.Router();
const initWebRouter = (app) => {
    router.get('/', home_controller.getHomepage);
    router.get('/detail/users/:userID', home_controller.getUser);
    router.post('/creater-new-user', home_controller.createUser);
    router.post('/delete-users', home_controller.deleteUser);
    router.post('/edit-user', home_controller.updateID);
    router.post('/update-user', home_controller.updateUser);
    return app.use('/', router);
}

export default initWebRouter;