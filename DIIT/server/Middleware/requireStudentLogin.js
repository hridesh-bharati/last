const jwt = require("jsonwebtoken");
const JWTKEYS = process.env.JWTKEYS;
const {student}= require('../Model/student');
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "Dear student Please Log in" });
    }
    const token = authorization;
    jwt.verify(token, JWTKEYS, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must have  logged in" });
        }
        else {
            const { _id } = payload;
            student.findById(_id,{password:0}).then(userdata => {
                if(userdata!==null){
                    req.user = userdata
                    next();
                }
                else{
                    return res.status(401).json({ error: "You must have  logged in" });
                }
            })
        }
    })

}