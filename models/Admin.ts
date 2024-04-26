import { Schema, model, models, Document } from "mongoose";

interface IAdmin extends Document {
  email: string;
  password: string;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: [true, "Must provide a password"],
    },
  },
  {
    timestamps: true,
  }
);


const Admin = models.Admin || model<IAdmin>("Admin", AdminSchema);

export default Admin;
