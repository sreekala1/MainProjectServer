const jwt = require("jsonwebtoken")
const secretKey = "Confidential key"

const authenticationMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    console.log("Access Token : ",token)
    if (token){
        const splitToken = token.split(" ")[1]
        if (splitToken && splitToken !== "null"){
            try{
                var decoded = jwt.verify(splitToken, secretKey);
                if (decoded.email){
                    return next()
                }
            }catch (err){
                return res.status(401).send({message: "Unauthorized"})
            }
        }
        console.log("Valid Access Token : ",validToken)
    }
    return res.status(401).send({message: "Unauthorized"})

    // if (token){
    //     const validToken = token.split(" ")[1]
    //     if (validToken && validToken !== "null"){
    //         console.log("Access Token", token)
    //         console.log("Access Token", typeof token)
    //         next()
    //     }
    // }
    // res.status(401).send({message: "Unauthorized"})
}

module.exports = authenticationMiddleware