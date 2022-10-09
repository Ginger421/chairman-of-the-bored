const { ApolloError } = require("apollo-server-express");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
  Mutation: {
    async registerUser(_, { registerInput: { username, email, password } }) {
      //  see if and older user exists with email attempting to register
      const previousUser = await User.findOne({ email });

      // Throw error if that user exists
      if (previousUser) {
        throw new ApolloError(
          "A user with this email already exists" + email,
          "User_Already_Exists"
        );
      }

      // encrypt password
      var encryptedPassword = await bcrypt.hash(password, 10);

      // build out mongoose model(user)
      const newUser = new User({
        username: username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      // create JWT token (attach to out user model) the user model in User.js
      const token = jwt.sign(
        { user_id: newUser._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
    //   attach to user model
      newUser.token = token;
      // Save our user in mongodb
      const res = await newUser.save();
      return {
          id: res.id,
          ...res._doc,
        };
    },
    async loginUser(_, { loginInput: { email, password } }) {
      //    see if user exists with the email
      const user = await User.findOne({ email });
      // check if password matches encrypted password
      // create JWT token (attach to out user model) the user model in User.js
      if (user && (await bcrypt.compare(password, user.password))) {
        // create a new JWT token
        const token = jwt.sign({ user_id: user._id, email }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
        // token already exists, 
        user.token = token;
        // Save out user in mongodb
        // const res = await user.save();
        return {
          id: res.id,
          ...res._doc,
        };
      } else {
        throw new ApolloError(
          "Invalid login credentials",
          "INVALID_CREDENTIALS"
        );
      }
    },
  },
  //   this is connected to the User.js mongoose model, get user by id
    Query: {
      user: (_, { ID }) => User.findById(ID),
    },
};

module.exports = resolvers;
