var bjson = require("./data/boys.json");
/**this is the boy class the constructor of which defines the boy object */
/**@param {string} name- name of the boy
 * @param {integer} inteligence- intelligence of the boy
 * @param {integer} attractiveness- attractiveness of the boy
 * @param {integer} budget- budget of the boy
 * @param {string} committed- status of the boy
 * @param {string} girlname- name of the girl the boy is dating
 * @param {integer} minval- minimum attractiveness of the girl
 *  */
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
/**function which creates an array of objects belonging to the boy class
 */
function createboy()
 {
     try{
     boysarr = new Array(10);
    
     for(i=0;i<7;i++)
     {
         //var m = "b"+i;
         //console.log(m);
         boysarr[i] = new boy("b"+i,bjson["b"+i].intelligence,bjson["b"+i].attractiveness,bjson["b"+i].budget,bjson["b"+i].committed,bjson["b"+i].girlname,bjson["b"+i].minval);

     }
 }
 catch(err)
 {
     console.log(err);
 }

 }
 /**call to the createboy function */
createboy();
/**exporting the array created in the boycreate module */
 module.exports = boysarr;