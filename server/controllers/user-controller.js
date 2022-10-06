// import user model from models
const { User } = require('../models');
// import sign token function from auth-has email username and _id
const { signToken } = require('../utils/auth');

module.exports = {

    //create and account
    async createUser({ body }, res) {
        const user = await User.create(body);
        if (!user) {
          return res.status(400).json({ message: 'Could not create user!' });
        }
        const token = signToken(user);
        res.json({ token, user });
      },

      //get a single user by username or id
      //we need to add the users completed activities and other data
      async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find user!' });
        }
    
        res.json(foundUser);
      },
}