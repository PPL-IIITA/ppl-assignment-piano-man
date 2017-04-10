var pjson = require('./../data/gifts.json');
var readline = require('readline');
var arr = require("./../assign.js");
var bjson = require("./../data/boys.json");
var gjson = require("./../data/girls.json");
var Giftcreate = require('./../giftcreate.js').Giftcreate;
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
total = 0;


/**this is the class to implement giftsystem1 */
class giftsystem1
{
    constructor()
    {
         for (i = 0; i < 7; i++) {

                if (arr.boysarr[i].committed == "true") {
                    var ty = arr.boysarr[i].type;
                    switch (ty) {
                        case "miser":
                            //default :
                            var k = 0;
                            var gname = arr.boysarr[i].girlname;
                            total = 0;
                            while (total <= gjson[gname].maintenance && k <= 15) {
                                if (giftsarr[k].fro == " ") {
                                    total = total + giftsarr[k].price;
                                    console.log(total);
                                    if (total < gjson[gname].maintenance) {
                                        giftsarr[k].fro = arr.boysarr[i].name;
                                        giftsarr[k].to = gname;
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                        k++;
                                    }
                                    else
                                        break;
                                    //else
                                    //total = total - giftsarr[k].price;
                                }
                                else
                                    k++;
                            }
                            arr.boysarr[i]["totalspent"] = total;
                            break;
                        case "geek":
                            var k = 0;
                            var gname = arr.boysarr[i].girlname;
                            total = 0;
                            while (total <= gjson[gname].maintenance && k <= 15) {
                                if (giftsarr[k].fro == " ") {
                                    total = total + giftsarr[k].price;
                                    if (total < gjson[gname].maintenance) {
                                        giftsarr[k].fro = arr.boysarr[i].name;
                                        giftsarr[k].to = gname;
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                        k++;
                                    }
                                    else
                                        break;
                                    //else
                                    //total = total-giftsarr[k].price;
                                }
                                else
                                    k++;
                            }
                            if (total < arr.boysarr[i].budget) {
                                for (m = 0; m < 16; m++) {
                                    if (giftsarr[m].fro == " ") {
                                        if (giftsarr[m].type = "luxury") {
                                            if (giftsarr[m].price < (arr.boysarr[i].budget - total)) {
                                                giftsarr[m].fro = boysrr[i].name;
                                                giftsarr[m].to = gname;
                                                var print = arr.boysarr[i].name + "gave" + giftsarr[m].name + "to" + gname;
                                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                                    if (err) {
                                                        return err;
                                                    }
                                                });
                                                break;

                                            }

                                        }
                                    }
                                }

                            }
                            arr.boysarr[i]["totalspent"] = total;
                            break;
                        case "generous":
                            var k = 0;
                            var gname = arr.boysarr[i].girlname;
                            total = 0;
                            while (total < arr.boysarr[i].budget) {
                                if (giftsarr[k].fro == " ") {
                                    total = total + giftsarr[k].price;
                                    if (total < arr.boysarr[i].budget) {
                                        giftsarr[k].fro = arr.boysarr[i].name;
                                        giftsarr[k].to = gname;
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                        k++;
                                    }
                                    else
                                        break;
                                }
                                else
                                    k++;
                            }
                            arr.boysarr[i]["totalspent"] = total;
                            break;
                    }

                    console.log(arr.boysarr[i].name);
                    console.log(arr.boysarr[i].totalspent);

                }



            }
    }
}
module.exports = {giftsystem1};