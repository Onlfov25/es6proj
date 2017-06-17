'use strict';

require('./example.js');

{
    function f(){
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a,,,b] = f();
    console.log(a, b);
}

{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    console.log(m);

}

{
    for(let index of ['a', 'b', 'c'].keys()){
        console.log('keys', index);
    }
    for(let value of ['a', 'b', 'c'].values()){
        console.log('values', value);
    }
    for(let [index, value]  of ['a', 'b', 'c'].entries()){
        console.log('keys+value', index, value);
    }
}

{
    let o = 1;
    let k = 2;
    let es5 = {
        o
    }

}


{
let arr = [2, 3, 4];
let set = new Set(arr);
set.forEach(function (item){ return console.log(item);})
}

