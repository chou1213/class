import { getValue, setValue } from './test';

setValue('imooc', 'immoc test');

getValue('imooc').then(res => {
    console.log(res);
})