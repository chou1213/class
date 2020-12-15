import { runInContext } from 'vm';
import User from './test';

// create
const user = {
  name: 'bibi',
  age: 35,
  email: 'bibi@163.com'
};

const insert = async () => {
  const data = new User(user);
  const result = await data.save();
  console.log(result);
}

// find
const findMethods = async () => {
  const result = await User.find();
  console.log(result);
}

// update
const updateMethods = async () => {
  const result = await User.updateOne({ name: 'bibi' }, {
    email: 'bibi@qq.com'
  });
  console.log(result);
}

// del
const deleteMethods = async () => {
  const result = await User.deleteOne({ name: 'bibi' });
  console.log(result);
}

deleteMethods();