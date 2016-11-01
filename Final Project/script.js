/**
 * Created by mmfab on 10/30/2016.
 */
const amountOfButterForBrownies= 0.5;
const amountOfSugarForBrownies=1;
const amountOfEggsForBrownies=2;
const amountOfVanillaExtractForBrownies= 1;
const amountOfCocoaPowderForBrownies =1/3;
const amountOfFlourForBrownies =0.5;
const amountOfSaltForBrownies = 0.25;
const amountOfBakingPowderForBrownies=2.23;




function remainder(amount) {
    var decimal= amount%1;



}

function findFraction(decimal) {

    var fraction=1;
    var deminator=1;
    while ( decimal!= fraction){
        deminator++;
        var numinrator=1;
        fraction= numinrator/deminator;

    }
    return deminator;

}
function Multiply(amount,times) {
    var totalAmountneeded= amount*times;

    return totalAmountneeded;




}

function calculations(times,constant) {
    var output="";
    var totalamount =Multiply(times,constant);
    if( totalamount%1!=0){

         var  decimal =remainder(totalamount);
        var bottomOfFraction=findFraction( decimal);
        output= totalamount.toFixed(0)+" "+"1/"+bottomOfFraction;

    }else {
        output= totalamount.toFixed(0);
    }
    return output;



}


function Browniesfortxt() {



    var times= parseFloat(document.getElementById("timestxt").value);
    var outputPart1Butter= calculations(times,amountOfButterForBrownies);
    var outputPart1Sugar= calculations(times,amountOfSugarForBrownies);
    var outputPart1Eggs= calculations(times,amountOfEggsForBrownies);
    var outputPart1VaillaExtract= calculations(times,amountOfVanillaExtractForBrownies);
    var outputPart1CocoaPowder= calculations(times,amountOfCocoaPowderForBrownies);
    var outputPart1Flour= calculations(times, amountOfFlourForBrownies);
    var outputPart1Salt= calculations(times,amountOfSaltForBrownies);
    var outputPart1BakingPowder= calculations(times,amountOfBakingPowderForBrownies);






}