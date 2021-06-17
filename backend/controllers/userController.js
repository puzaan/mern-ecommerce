import User from '../models/userModel.js'
import catchAsync from 'express-async-handler'

export const authUsers = catchAsync (async (req, res) => {
    const {email , password} = req.body;

const user = await User.findOne({email});

if(user && (await user.matchPassword(password))){
    console.log('user exist in database');
    return res.json({
        _id: user._id,
        name:User.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token: null
    })
}else{

   return res.status(401);
    throw new Error ('Invalid Email or password')
}

});

