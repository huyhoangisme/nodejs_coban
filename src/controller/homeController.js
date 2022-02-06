
import req from 'express/lib/request';
import connection from '../configs/connectDB'
// get homepage
const getHomepage = async (req, res) => {
    const sql = "SELECT * FROM users";
    const [data, field] = await connection.execute(sql)
    // console.log(data)
    res.render('home.ejs', { dataUser: data });
}
const getUser = async (req, res) => {
    const id = req.params.userID
    const sql = "SELECT * FROM users WHERE id = ?"
    const [data, fields] = await connection.execute(sql, [id]);
    res.render('detailUser.ejs', { user: data });
}
const createUser = async (req, res) => {
    const { firstname, lastname, email, address } = req.body;
    const sql = "INSERT INTO users (firstname,lastname,email,address) VALUES (?,?,?,?)"
    await connection.execute(sql, [firstname, lastname, email, address]);
    return res.redirect('/');
}
const deleteUser = async (req, res) => {
    const id = req.body.userId;
    const sql = 'DELETE FROM users WHERE id = ?'
    await connection.execute(sql, [id]);
    return res.redirect('/');
}
const updateID = async (req, res) => {
    // update user choose id user
    const id = req.body.userId;
    const query = 'SELECT * FROM users WHERE id = ?';
    const [data] = await connection.execute(query, [id]);
    res.render('updateUser.ejs', { updateUser: data });
}
const updateUser = async (req, res) => {
    console.log(req.body)
    const { firstname, lastname, email, address, id } = req.body;
    const sql = "UPDATE users SET firstname = ?,lastname = ?,email = ?, address = ? WHERE id = ?";
    await connection.execute(sql, [firstname, lastname, email, address, id]);
    res.redirect('/')
}
module.exports = {
    getHomepage,
    getUser,
    createUser,
    deleteUser,
    updateID,
    updateUser
}