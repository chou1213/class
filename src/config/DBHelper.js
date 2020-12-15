import mongoose from 'mongoose';
import config from './index';

// 创建连接
mongoose.connect(config.DB_URl, {
  useNewUrlParser: true, useUnifiedTopology: true
});

// 连接成功
mongoose.connection.on('connected', () => {
  console.log('connect success:', config.DB_URl);
})

// 连接异常
mongoose.connection.on('error', () => {
  console.log('connect error:', error);
})

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
})

export default mongoose

