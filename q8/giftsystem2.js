var pjson = require('./../data/gifts.json');
var readline = require('readline');
var arr = require("./../assign.js");
var bjson = require("./../data/boys.json");
var gjson = require("./../data/girls.json");
var Giftcreate = require('./../giftcreate.js').Giftcreate;
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
/**this is the class to implement giftsystem2 */
class giftsystem2
{
    constructor()
    {
        for (i = 0; i < 7; i++) {
                var count = new Array(3);
                var l = 0;
                var k =0;
                if (arr.boysarr[i].committed == "true") {
                    var ty = arr.boysarr[i].type;
                    while (k < 16 && count < 3) {

                        if (giftsarr[k].fro == " " && giftsarr[k].type == "essential" && l < 3) {
                            flag = 0;
                            for (i = 0; i < 3; i++) {
                                if (count[i] == "essential") {
                                    flag = 1;
                                    break;

                                }
                            }
                            if (flag == 0) {
                                var gname = arr.boysarr[i].girlname;
                                total = total + giftsarr[k].price;
                                giftsrr[k].to = gname;
                                giftsarr[k].from = boysarr[i].name
                                var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                    if (err) {
                                        return err;
                                    }
                                });
                                k++;
                                count[l] = "essential";
                                l++;
                            }
                        }
                        if (giftsarr[k].fro == " " && giftsarr[k].type == "utility" && l < 3) {
                            flag = 0;
                            for (i = 0; i < 3; i++) {
                                if (count[i] == "utility") {
                                    flag = 1;
                                    break;

                                }
                            }
                            if (flag == 0) {
                                var gname = arr.boysarr[i].girlname;
                                total = total + giftsarr[k].price;
                                giftsrr[k].to = gname;
                                giftsarr[k].from = boysarr[i].name
                                var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                    if (err) {
                                        return err;
                                    }
                                });
                                k++;
                                count[l] = "utility";
                                l++;
                            }
                        }
                        if (giftsarr[k].fro == " " && giftsarr[k].type == "luxury" && l < 3) {
                            flag = 0;
                            for (i = 0; i < 3; i++) {
                                if (count[i] == "luxury") {
                                    flag = 1;
                                    break;

                                }
                            }
                            if (flag == 0) {
                                var gname = arr.boysarr[i].girlname;
                                total = total + giftsarr[k].price;
                                giftsrr[k].to = gname;
                                giftsarr[k].from = boysarr[i].name
                                var print = arr.boysarr[i].name + "gave" + giftsarr[k].name + "to" + gname;
                                fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                    if (err) {
                                        return err;
                                    }
                                });
                                k++;
                                count[l] = "luxury";
                                l++;
                            }
                        }
                        if (total < boysarr[i].budget) {
                            for (j = 0; j < 16; j++) {
                                if (giftsarr[j].from == "") {
                                    if (giftsarr[j].price + total < boysarr[i].budget) {
                                        var gname = arr.boysarr[i].girlname;
                                        total = total + giftsarr[k].price;
                                        giftsrr[j].to = gname;
                                        giftsarr[j].from = boysarr[i].name
                                        var print = arr.boysarr[i].name + "gave" + giftsarr[j].name + "to" + gname;
                                        fs.appendFile("./gifts.txt", print + "\n", function (err) {
                                            if (err) {
                                                return err;
                                            }
                                        });
                                    }
                                    else
                                        continue;
                                }


                            }
                        }



                    }

                }
            }

    
    }
}
module.exports = {giftsystem2};