import User from '../models/userModel.js'
import catchAsync from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

export const authUsers = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        console.log('user exist in database');
        return res.json({
            _id: user._id,
            name: User.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {

        res.status(401);
        throw new Error('Invalid Email or password')
    }

});

//@ des GET USER PROFILE
//@rout GET /api/users/profile
//@access private


export const getUserProfile = catchAsync(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error("User belonging to this token no longer exist");
    }
})

// dec update user profile
// rout put /api/user/profile
// acces private


export const updateUserProfile = catchAsync(
  async(req, res) => {
    // check user exist in data base
    const user = await User.findById(req.user._id);

    if(user){
      // cange value if there is new value otherwise same
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;


      if(req.body.password){
        user.password = req.body.password;
      }

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),



        
      });
    }else{
      res.status(404);
      throw new Error("user belonging to this token no longer exist")
    }
  }
)




//description register aa new user
//rout Post/api/user
// access public


export const registerUser = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExist = await User.findOne({ email });
  
    if (userExist) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    if (user) {
      res.status(201);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  });

