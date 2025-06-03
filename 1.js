//===============================черновик===========

const book = {
    id:1,
    name:"Test",
    pickList:[
        {reader : "Albert", give_date:"01/11/2008",return_date:""},
        {reader : "Albert1", give_date:"02/11/2008",return_date:""},
        {reader : "Albert2", give_date:"03/11/2008",return_date:""},
        {reader : "Albert3", give_date:"04/11/2008",return_date:""},
    ]
}

const index = book.pickList.findIndex(item => item.reader === "Albert2");
book.pickList[index].return_date = "2/2/2222";
// console.log(book.pickList)


const userRequestCounts = new Map();
userRequestCounts.set('test',{count:1,time:1111})
userRequestCounts.set('albert',{count:2,time:1222})
userRequestCounts.set('nasta',{count:3,time:1333})
console.log(userRequestCounts)
console.log(userRequestCounts.get('albert'));
console.log(userRequestCounts.has('albert'));
console.log(userRequestCounts.delete('albert'));
console.log(userRequestCounts)


