1. src/config/index.js 保存全局变量，放置mongodb配置
2. src/config/DBHelper.js 链接数据库
3. src/model/test.js 编辑users集合模型
4. src/model/demo.js 引用users数据模型，对数据进行增删改成（npx babel-node src/model/demo.js ）
5. npm i -S redis 安装redis
6. src/config/RedisConfig redis连接配置，设置set，get，hset，hgetall
7. src/config/test.js 调用方法操作redis