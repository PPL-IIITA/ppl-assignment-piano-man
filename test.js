var pjson = require("/home/piano-man/ppl_assignment/gifts.json");
class gift{
    constructor(name,type,price,value,fro,to)
    {
        this.name = name;
        this.type = type;
        this.price = price;
        this.value = value;
        this.fro = fro;
        this.to = to;
    }
}
function gifting()
{
giftsarr = new Array(50);
      for(i=0;i<16;i++)
     {
         giftsarr[i] = new gift("p"+i,pjson["p"+i].type,pjson["p"+i].price,pjson["p"+i].value,pjson["p"+i].fro,pjson["p"+i].to);

     }
     giftsarr.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});
for(i=0;i<16;i++)
{
    console.log(giftsarr[i].price);
}
}
gifting();