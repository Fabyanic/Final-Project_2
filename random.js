/**
 * Created by mmfab on 11/16/2016.
 */

function randomInt() {
    var number= Math.floor(4*Math.random());
    return number;

}
function Multiply(amount, times) {
    var totalAmountneeded = amount * times;

    return totalAmountneeded;


}
function classRandom() {

    var browines= 0;
    var fruitPizza=1;
    var ChoclateChipCookies=2;
    var Tiramisu=3;

    var numberRandom=randomInt();
    if(Tiramisu==numberRandom) {


        document.getElementById("class").innerHTML="calculus";


    }
    else if( fruitPizza==numberRandom) {

        document.getElementById("class").innerHTML="css 112";

    }
    else if(ChoclateChipCookies==numberRandom) {

        document.getElementById("class").innerHTML="css 160"

    }
    else {

        document.getElementById("class").innerHTML="english";

    }

}



