import db from '../models/index';
import CRUDservices from '../services/CRUDservices';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};

let getCrud = (req, res) => {
    res.render('crud.ejs');
};

let postCrud = async (req, res) => {
    let message = await CRUDservices.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
};

let displayGetCrud = async (req, res) => {
    let data = await CRUDservices.getAllUser();
    return res.render('displayCrud.ejs', {
        dataTable: data,
    });
};

let getEditCrud = async (req, res) => {
    let userId = req.query.id;

    let userData = await CRUDservices.getUserInfoById(userId);

    if (userData) {
        return res.render('editCrud.ejs', { user: userData });
    } else {
        return res.send('User not found');
    }
};

let putCrud = async (req, res) => {
    let data = req.body;
    await CRUDservices.updateUserData(data);
    return res.redirect('/get-crud');
};

let deleteCrud = async (req, res) => {
    let userId = req.query.id;

    await CRUDservices.deleteUserById(userId);

    return res.send('delete the user succeed!');
};

module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    displayGetCrud: displayGetCrud,
    getEditCrud: getEditCrud,
    putCrud: putCrud,
    deleteCrud: deleteCrud,
};
