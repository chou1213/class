import { getValue, setValue, getHValue } from './RedisConfig';

setValue('imooc', 'immoc test1');

getValue('imooc').then(res => {
	console.log('getValue', res);
})

setValue('obj', { name: "jojo", age: 30 });

getHValue('obj').then(res => {
	console.log('getHValue', res);
})
