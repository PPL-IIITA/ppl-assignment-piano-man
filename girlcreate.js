var gjson = require("./girls.json");
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
function creategirl()
{
     girlsarr = new Array(10);
    
     for(i=0;i<4;i++)
     {
         //var m = "g"+i;
         girlsarr[i] = new girl("g"+i,gjson["g"+i].intelligence,gjson["g"+i].attractiveness,gjson["g"+i].maintenance,gjson["g"+i].committed,gjson["g"+i].boyname);

     }
}
creategirl();
module.exports = girlsarr;