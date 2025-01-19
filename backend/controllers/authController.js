import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genrateToken from "../utils/genrateToken.js";
const login = (req, res) => {
    res.send("login phjxdfhjsage");
};

const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmpassword, gender } =
            req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "password not matching" });
        }

        const user = await User.findOne({ username });

        if (user) {
            res.status(400).json({ error: "use ralreay exist" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            // genrate JWT token
            genrateToken(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "user not created" });
        }
    } catch (error) {
        console.log("error in signup controller", error);
        res.status(500).json({ error: "internal server error" });
    }
};

const logout = async(req, res) => {
    try {
        
    } catch (error) {
        
    }

};

export { login, signup, logout };
