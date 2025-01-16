import User from "../models/user.model";

 const login = (req,res)=>{
    res.send("login phjxdfhjsage");
};

 const signup =async (req,res)=>{
    try {
        const {fullname ,username,password , confirmpassword,gender }=req.body

        if(password!==confirmpassword){
            return res.status(400).json({error:"password not matching"});
        }

        const user = await User.findOne({username})

        if((user)){
            res.status(400).json({error:"use ralreay exist"})
        }

        



    } catch (error) {
        
    }
}

 const logout = (req,res)=>{
    res.send ("logout page");
}

export {login,signup,logout};





