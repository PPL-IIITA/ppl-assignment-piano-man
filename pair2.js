var boysarr = require("./boycreate.js");
var girlsarr = require("./girlcreate.js");
var fs = require("fs");
function driver(){
    
boysarr.sort(function (a, b) {
    return parseFloat(a.attractiveness) - parseFloat(b.attractiveness)
})
girlsarr.sort(function (a, b) {
    return parseFloat(a.maintenance) - parseFloat(b.maintenance)
})
i = 0;
while (i < 4) {
    if (i % 2 == 0) {
        if (girlsarr[i].committed == "false") {
            for (k = 0; k < 7; k++) {
                if (boysarr[k].minval < girlsarr[i].attractiveness) {
                    if (boysarr[k].budget <= girlsarr[i].maintenance) {
                        boysarr[k].committed = "true";
                        boysarr[k].girlname = "g" + i;
                        girlsarr[i].boyname = "b" + k;
                        girlsarr[i].committed = "true";
                        i++;
                        break;
                    }
                    else
                        i++;
                    break;
                }


                else
                    i++;
                break;
            }
        }
        else
            i++;
        //break;
    }

    else {
        for (i = 0; i < 7; i++) {
            if (boysarr[i].committed == "false") {
                for (m = 0; m < 4; m++) {
                    if (girlsarr[m].committed == "false") {
                        if (boysarr[i].minval < girlsarr[m].attractiveness) {
                            if (boysarr[i].budget <= girlsarr[m].maintenance) {
                                boysarr[i].committed = "true";
                                boysarr[i].girlname = "g" + m;
                                girlsarr[m].boyname = "b" + i;
                                girlsarr[m].committed = "true";
                                break;


                            }
                        }

                    }
                }

            break;
        }
        }
    }
}
}
 module.exports = {
     boysarr,
 girlsarr} ;