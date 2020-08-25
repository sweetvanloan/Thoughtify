const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login
};

async function signup(req, res) {

    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);

        res.json({ token })

    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ username: req.body.username })
        console.log(req.body)
        if (!user) return res.status(401).json({ err: "bad credentials-user not found" });
        user.comparePassword(req.body.password, (err, isMatch) => {
            console.log("this is from login:", err)
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token })
            } else {
                return res.status(401).json({ err: "bad credentials-bad password" });
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            err: "something went wrong"
        })
    }


    function createJWT(user) {
        return jwt.sign(
            { user },
            SECRET,
            { expiresIn: "24h" }
        );
    }

}
