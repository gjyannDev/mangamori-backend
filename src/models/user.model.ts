import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {
  AuthTypes,
  UserModel,
  UserModelMethods,
  UserModelTypes,
} from "../types/auth.types.js";

const user_schema = new mongoose.Schema<
  UserModelTypes,
  UserModel,
  UserModelMethods
>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

user_schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

user_schema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<UserModelTypes, UserModel>("User", user_schema);

export default User;
