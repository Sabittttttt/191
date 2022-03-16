let array = [];

for(let i = 1; i < Infinity; i++){
    let add = prompt(' add - чтобы добавить;  del - чтобы удалить;  stop - чтобы остановить;');
    if(add == 'add'){
        let a = prompt('add - чтобы добавить;')
        array.push(a)
    }else if (add == 'del'){
        let b = prompt('del - чтобы удалить')
        for(let key in array){
            array[key] == b ? array.splice(key,1) : '';
        }
    }else if( add == 'stop'){
        break
    }
    console.log(array);
}