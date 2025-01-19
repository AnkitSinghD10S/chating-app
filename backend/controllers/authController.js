import User from "../models/user.model";

const login = (req, res) => {
    res.send("login phjxdfhjsage");
};

const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } =
            req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "password not matching" });
        }

        const user = await User.findOne({ username });

        if (user) {
            res.status(400).json({ error: "use ralreay exist" });
        }

        // hash password

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender == male ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: "internal server error" });

    }
};

const logout = (req, res) => {
    res.send("logout page");
};

export { login, signup, logout };
