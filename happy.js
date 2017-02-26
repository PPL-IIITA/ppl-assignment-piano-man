var bjson = require("/home/piano-man/ppl_assignment/boys.json");
var gjson = require("/home/piano-man/ppl_assignment/girls.json");
var pjson = require("/home/piano-man/ppl_assignment/gifts.json");
var fs = require("fs");

var arr1 = require("/home/piano-man/ppl_assignment/gifting.js");
//var arr1.arr.girlsarr = require("/home/piano-man/ppl_assignment/girlcreate.js");


class couple{
    constructor(boyname,girlname,boyhap,girlhap,hap,comp)
    {
        this.boyname = boyname;
        this.girlname = girlname;
        this.boyhap = boyhap;
        this.girlhap = girlhap;
        this.hap = hap;
        this.comp = comp;
    }
}

 function happiness()
{
    couplesarr = new Array(50);
    var k = 0;
for(i=0;i<7;i++)
{
    if(arr1.arr.boysarr[i].committed=="true")
    {
        var ty = arr1.arr.boysarr[i].type;
        var gname = arr1.arr.boysarr[i].girlname;
        for(j=0;j<4;j++)
        {
            if(arr1.arr.girlsarr[j].name==gname)
            {
                gty=arr1.arr.girlsarr[j].type;
                gmain = arr1.arr.girlsarr[j].maintenance;
                gint = arr1.arr.girlsarr[j].intelligence;
            }
        }
        switch(ty)
        {
            case "miser": 
            bhap = arr1.arr.boysarr[i].budget-arr1.arr.boysarr[i].total;
            if(gty=="choosy")
            {
                ghap=Math.log((arr1.arr.boysarr[i].totalspent-gmain));

 
            }
            else if (gty=="normal")
            {
                ghap=arr1.arr.boysarr[i].totalspent-gmain;

            }
            else if(gty=="desperate")
            {
                ghap=Math.exp(arr1.arr.boysarr[i].totalspent-gmain);

            }
            hap=bhap+ghap;
            couplesarr[k] = new couple(arr1.arr.boysarr[i].name,gname,bhap,ghap,hap,0);
            k++; 
            
            break;
            case "generous":
            if(gty=="choosy")
            {
                ghap=Math.log((arr1.arr.boysarr[i].totalspent-gmain));

 
            }
            else if (gty=="normal")
            {
                ghap=arr1.arr.boysarr[i].totalspent-gmain;

            }
            else if(gty=="desperate")
            {
                ghap=Math.exp(arr1.arr.boysarr[i].totalspent-gmain);

            }
            bhap = ghap;
            hap=bhap+ghap;
            couplesarr[k] = new couple(arr1.arr.boysarr[i].name,gname,bhap,ghap,hap,0);
            k++; 
            break;
            case "geek":
            bhap = gint;
            if(gty=="choosy")
            {
                ghap=Math.log((arr1.arr.boysarr[i].totalspent-gmain));

 
            }
            else if (gty=="normal")
            {
                ghap=arr1.arr.boysarr[i].totalspent-gmain;

            }
            else if(gty=="desperate")
            {
                ghap=Math.exp(arr1.arr.boysarr[i].totalspent-gmain);

            }
            hap=bhap+ghap;
            couplesarr[k] = new couple(arr1.arr.boysarr[i].name,gname,bhap,ghap,hap,0);
            k++; 
            break;
        }
    }
}
for(i=0;i<k;i++)
{
    console.log(couplesarr[i].hap);
}
}
happiness();

