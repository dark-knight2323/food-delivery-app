import jwt from 'jsonwebtoken';

async function authMiddleware (req, res, next) {
    const {token} = req.headers;
    if (!token) {
        return res.json({success : false,message: "Unauthorized access"});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id; // create a new key in req.body and assign the value of id from tokenDecode
        // we only got token with us first after it is verified then user id is extracted from it and added to req.body
        next(); 
    }catch (error) {
        console.log(error); 
        return res.json({success : false,message: "Error"});
    }
}

export default authMiddleware;