

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
console.log(book.pickList)


console.log(-1!==-1)

let t = {
    id:1,f:2
}
console.log(t)