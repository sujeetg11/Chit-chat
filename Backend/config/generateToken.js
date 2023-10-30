const jsonwebtoken = require('jsonwebtoken');

const generateToken = (id) =>{
    return jsonwebtoken.sign({id},process.env.JWT_SECRET,{
        expiresIn: '7d',
    });
};

module.exports = generateToken;