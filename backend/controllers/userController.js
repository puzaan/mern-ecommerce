import User from '../models/userModel.js'
import catchAsync from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

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
        token: generateToken(user._id),
    })
}else{

res.status(401);
    throw new Error ('Invalid Email or password')
}

});

