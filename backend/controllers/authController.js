 const login = (req,res)=>{
    res.send("login phjxdfhjsage");
};

 const signup =async (req,res)=>{
    try {
        const {fullname ,username,password , confirmpassword }=req.body
    } catch (error) {
        
    }
}

 const logout = (req,res)=>{
    res.send ("logout page");
}

export {login,signup,logout};





