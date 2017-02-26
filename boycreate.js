var bjson = require("./boys.json");
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
function createboy()
 {
     boysarr = new Array(10);
    
     for(i=0;i<7;i++)
     {
         //var m = "b"+i;
         //console.log(m);
         boysarr[i] = new boy("b"+i,bjson["b"+i].intelligence,bjson["b"+i].attractiveness,bjson["b"+i].budget,bjson["b"+i].committed,bjson["b"+i].girlname,bjson["b"+i].minval);

     }
 }
createboy();
 module.exports = boysarr;