import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};

let getCrud = (req, res) => {
    res.send('get crud');
};

module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
};
