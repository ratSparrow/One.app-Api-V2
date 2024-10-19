import { model, Schema } from "mongoose";

const AdminSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: 'Branch',
    required: true
  },
  role: {
    type: String,
    enum: ['Admin'],
    default: 'Admin',
    required: true
  },
  hireDate: {
    type: Date,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: true
  },
  permissions: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
});

export const Admin = model('admin', AdminSchema);


