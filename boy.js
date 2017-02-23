var bjson = require("/home/piano-man/ppl_assignment/boys.json");
var gjson = require("/home/piano-man/ppl_assignment/girls.json");
var pjson = require("/home/piano-man/ppl_assignment/gifts.json");
var fs = require("fs");
class boy{
    constructor (name,intelligence,attractiveness,budget,committed,girlname,minval)
{
    this.name = name;
    this.intelligence = intelligence;
    this.attractiveness = attractiveness;
    this.budget = budget;
    this.committed = committed;
    this.girlname = girlname;
    this.minval = minval;
}

}
class girl{
    constructor (name,intelligence,attractiveness,maintenance,committed,boyname)
{
    this.name = name;
    this.attractiveness = attractiveness;
    this.maintenance = maintenance;
    this.intelligence = intelligence;
    this.committed = committed;
    this.boyname = boyname;
}
}
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

 function driver()
 {
     boysarr = new Array(10);
     girlsarr = new Array(10);
     for(i=0;i<7;i++)
     {
         //var m = "b"+i;
         //console.log(m);
         boysarr[i] = new boy("b"+i,bjson["b"+i].intelligence,bjson["b"+i].attractiveness,bjson["b"+i].budget,bjson["b"+i].committed,bjson["b"+i].girlname,bjson["b"+i].minval);

     }
     for(i=0;i<4;i++)
     {
         //var m = "g"+i;
         girlsarr[i] = new girl("g"+i,gjson["g"+i].intelligence,gjson["g"+i].attractiveness,gjson["g"+i].maintenance,gjson["g"+i].committed,gjson["g"+i].boyname);

     }
   
     var k = 0;
     
     for(k=0;k<7;k++)
     {
         var j=0;
    while(j<4)
    {
        if(girlsarr[j].committed=="false")
        {
        if(boysarr[k].minval<girlsarr[j].attractiveness)
        {
            if(boysarr[k].budget<=girlsarr[j].maintenance)
            {
                boysarr[k].committed="true";
                boysarr[k].girlname="g"+j;
                girlsarr[j].boyname="b"+k;
                girlsarr[j].committed="true";
                break;
            }
            else
            j++;
        }
        else
        j++;
    }
    else
    j++;
}
     }
     
for(i=0;i<7;i++)
{
    if(boysarr[i].committed=="true")
    {
        var x = boysarr[i].name+" is dating "+boysarr[i].girlname + "\n";
        //console.log(x);
        fs.appendFile("/home/piano-man/ppl_assignment/log.txt",x,function(err){
            if(err)
            return console.log("error detected");
        });
}
        
}
 }
 function assign()
 {
     var k = 0;
     var l = 0;
     var btype = [
         "miser",
         "generous",
         "geek"
     ];
     var gtype = [
         "choosy",
         "normal",
         "desperate"
     ];
     for(k=0;k<7;k++)
     {
     var rno = Math.floor(Math.random()*btype.length);
     //var rno1 = Math.floor(Math.random()*gtype.length);
     if(boysarr[k].committed == "true")
     {
         boysarr[k]["type"]=btype[rno];
         
     }

 }
 for(l=0;l<4;l++)
 {
     var rno = Math.floor(Math.random()*gtype.length);
     if(girlsarr[l].committed=="true")
     {
         girlsarr[l]["type"]=gtype[rno];
     }
 }


 }
 //assign();
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
   
     //var len = Object.keys(pjson).length;
     for(i=0;i<7;i++)
     {
         if(boysarr[i].committed=="true")
         {
             var ty = boysarr[i].type;
             switch(ty)
             {
                 case "miser":
                 var k = 0;
                 var gname = boysarr[i].girlname;
                 total = 0;
                 while(total<=gjson[gname].maintenance)
                 {
                     if(giftsarr[k].fro==" ")
                     {
                         total = total + giftsarr[k].price;
                         if(total<gjson[gname].maintenance)
                         {
                             giftsarr[k].fro=boysarr[i].name;
                             giftsarr[k].to=gname;
                             k++;
                         }
                         else
                         total = total - giftsarr[k].price;
                     }
                 }
                 break;
                 case  "geek":
                 var k = 0;
                 var gname = boysarr[i].girlname;
                 total = 0;
                 while(total<=gjson[gname].maintenance)
                 {
                     if(giftsarr[k].fro==" ")
                     {
                         total = total + giftsarr[k].price;
                         if(total<gjson[gname].maintenance)
                         {
                             giftsarr[k].fro=boysarr[i].name;
                             giftsarr[k].to=gname;
                             k++;
                         }
                         else
                         total = total-giftsarr[k].price;
                     }
                 }
                 if(total<boysarr[i].budget)
                 {
                     for(m=0;m<16;m++)
                     {
                         if(giftsarr[m].fro==" ")
                         {
                         if(giftsarr[m].type="luxury")
                         {
                             if(giftsarr[m].price<(boysarr[i].budget-total))
                             {
                                 giftsarr[m].fro=boysrr[i].name;
                                 giftsarr[m].to=gname;
                                 break;

                             }

                         }
                         } 
                    }

                 }
                 break;
                 case "generous":
                 var k = 0;
                 var gname = boysarr[i].girlname;
                 total = 0;
                 while(total<boysarr[i].budget)
                 {
                     if(giftsarr[k].fro==" ")
                     {
                         total = total + giftsarr[k].price;
                         if(total<boysarr[i].budget)
                         {
                             giftsarr[k].fro=boysarr[i].name;
                             giftsarr[k].to=gname;
                             k++;
                         }
                     }
                 }
                 break;
             }
             boysarr[i]["totalspent"]=total;
         }
         


     }
     

 }
function happiness()
{

}
function compatibility()
{
    
}
