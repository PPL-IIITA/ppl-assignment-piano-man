var pjson = require('./../data/gifts.json');
var readline = require('readline');
var arr = require("./../assign.js");
var bjson = require("./../data/boys.json");
var gjson = require("./../data/girls.json");
var Giftcreate = require('./../giftcreate.js').Giftcreate;
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
var system;
var giftsystem1 = require('./giftsystem1.js').giftsystem1;
var giftsystem2 = require('./giftsystem2.js').giftsystem2;
rl.question('what type of gifting system do you want ?', function (answer) {
    system = answer;
    gifting();
    module.exports = {
        arr,
        giftsarr
    };

})
/**function to create a gift allocation system with two possible implementations */
function gifting() {
    try {
        giftsarr = new Array(50);
        for (i = 0; i < 16; i++) {
            //giftsarr[i] = new gift("p"+i,pjson["p"+i].type,pjson["p"+i].price,pjson["p"+i].value,pjson["p"+i].fro,pjson["p"+i].to);
            giftsarr[i] = new Giftcreate("p" + i, pjson["p" + i].type, pjson["p" + i].price, pjson["p" + i].value, pjson["p" + i].fro, pjson["p" + i].to);
            //giftasrr[i].makegift("p" + i, pjson["p" + i].type, pjson["p" + i].price, pjson["p" + i].value, pjson["p" + i].fro, pjson["p" + i].to);

        }
        giftsarr.sort(function (a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });

        switch (system) {
            case "1":
                new giftsystem1();
                break;



            case "2":
                new giftsystem2();
        }
    }
    catch (err) {
        console.log(err);
    }
}
