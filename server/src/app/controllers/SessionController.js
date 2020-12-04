require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

class SessionController{
    async register(req, res){
       const { email, password } = req.body;

       const user = await User.findOne({ email: email });

       if(!user)
           return res.status(404).send('User Not Found');

      const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

       if(!isPasswordCorrect)
          return res.status(401).send('Wrong Password');

       return res.json({
           token: jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
               expiresIn: '7d'
           })
       })   
    }
}

module.exports = new SessionController();