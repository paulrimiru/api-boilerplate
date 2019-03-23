import { left, right } from 'fp-ts/lib/Either';
import * as mongoose from 'mongoose';
import { UserSchema } from 'src/models/User';

import { UserDetails } from './interfaces';

export const addUser = async (userDetails: UserDetails) => {
  const User = mongoose.model('User', UserSchema);
  const newUser = new User(userDetails);

  return await newUser.save()
    .then((user) => right(user))
    .catch((err) => left(err));
};
