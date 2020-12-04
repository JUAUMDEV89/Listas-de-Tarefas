require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    auth:(req, res, next)=>{
        const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).send('Token not provided');
        
        const [, token] = authHeader.split(' ');

        try{
           const payload = jwt.verify(token, process.env.SECRET_KEY);

           req.userId = payload.userId;

           return next();
        }catch(err){
           return res.status(401).send('Invalid Token');
        }
    }
}