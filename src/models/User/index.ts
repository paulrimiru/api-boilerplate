import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  name: {
    type: String,
    required: 'Provide a name for the user',
  },
});
