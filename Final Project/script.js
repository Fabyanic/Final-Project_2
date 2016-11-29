/**
 * Created by mmfab on 10/30/2016.
 */
const amountOfButterForBrownies = 0.5;
const amountOfSugarForBrownies = 1;
const amountOfEggsForBrownies = 2;
const amountOfVanillaExtractForBrownies = 1;
const amountOfCocoaPowderForBrownies = 1 / 3;
const amountOfFlourForBrownies = 0.5;
const amountOfSaltForBrownies = 0.25;
const amountOfBakingPowderForBrownies = 0.25;
const amountOfEggsT=6;
const amountOfWhiteSugarT=0.75;
const amountOfMilkT=2/3;
const amountOfHeavyCreamT=1.25;
const amountOfVanillaExtractT=0.5;
const amountOfMascarponeCheeseT=1;
const amountOfStrongCoffeeT=0.25;
const amountOfrumT=2;
const amountOfLadyFingerCookiesT=2;
const amountOfCocoaPowderT=1;
const amountOfButterC=1;
const amountOfWhiteSugarC=1;
const amountOfBrownSugarC=1;
const amountOfEggsC=2;
const amountOfVanillaExtractC=2;
const amountOfFlourC=3;
const amountOfBakingSodaC=1;
const amountOfHotWaterC=2;
const amountOfSaltC=0.5;
const amountOfWalnutsC=1;



function remainder(amount) {
    var decimal = amount % 1;

return decimal;
}

function findFraction(decimal) {
    var output;
    var fraction = decimal;
    var deminator;
    var wholeNumber=0;
    var timeOfLoops=0;
    if( decimal>0.32&&decimal<0.34){
        wholeNumber=1;
        deminator=3;
        output= wholeNumber+"/"+deminator;
        return output;


    }
    if (decimal>0.65&&decimal<0.67){

        wholeNumber=2;
        deminator=3;
        output= wholeNumber+"/"+deminator;
        return output;
    }





        do {

            timeOfLoops++;
            wholeNumber= decimal*10;
            decimal=wholeNumber;
            if(wholeNumber%1==0){
                deminator=Math.pow(10,timeOfLoops)

            }
            fraction2= wholeNumber/deminator;

        }while( fraction2!= fraction)

    var gCF=findGCF(wholeNumber,deminator);
    var topOfFraction;
    var bottomOfFraction;
    topOfFraction= wholeNumber/gCF;
    bottomOfFraction=deminator/gCF;


    output= topOfFraction+"/"+ bottomOfFraction;
    return output;







}

function findGCF(wholenumber,deminator) {

    var quient=0.5;
    var remainder;
    var muiltiply;

    while (quient%1!=0|| remainder!=0){

        quient= deminator/wholenumber;
        quient= Math.floor(quient);
        muiltiply= wholenumber*quient;
        remainder= deminator-muiltiply;
        if(remainder!= 0){
            deminator=wholenumber;
            wholenumber= remainder;
        }





    }

    return wholenumber;










}

function DessertRandom() {

    var browines= 0;
    var fruitPizza=1;
    var ChoclateChipCookies=2;
    var Tiramisu=3;

    var numberRandom=randomInt();
    if(Tiramisu==numberRandom) {
        document.getElementById("picture").src="images/864554.jpg";

        document.getElementById("nameOfDessert").innerHTML="Tiramisu";


    }
        else if( fruitPizza==numberRandom) {
            document.getElementById("picture").src="images/pizza.jpg";
        document.getElementById("nameOfDessert").innerHTML="Fruit Pizza";

    }
        else if(ChoclateChipCookies==numberRandom) {
            document.getElementById("picture").src="images/2514148.jpg";
        document.getElementById("nameOfDessert").innerHTML="Chocolate Chip Cookies"

    }
        else {
            document.getElementById("picture").src="images/1090243.jpg";
        document.getElementById("nameOfDessert").innerHTML="Brownies";

    }

}

function randomInt() {
    var number= Math.floor(4*Math.random());
    return number;

}
function Multiply(amount, times) {
    var totalAmountneeded = amount * times;

    return totalAmountneeded;


}

function calculations(times, constant) {
    var output = "";
    var totalamount = Multiply(times, constant);
    if (totalamount % 1 != 0) {

        var decimal = remainder(totalamount);
        var output1 = findFraction(decimal,times);
        totalamount=Math.floor(totalamount);
        if (totalamount!=0){

        output= totalamount.toFixed(0)+" " +output1;
        return output;
        }else {
            output= output1;

        return output;}



    }
    Math.floor(totalamount);
    output= totalamount.toFixed(0);
    return output;


}


function Browniesfortxt() {


    var times = parseFloat(document.getElementById("timestxt").value);



    var outputPart1Butter = calculations(times, amountOfButterForBrownies);
    var outputPart1Sugar = calculations(times, amountOfSugarForBrownies);
    var outputPart1Eggs = calculations(times, amountOfEggsForBrownies);
    var outputPart1VaillaExtract = calculations(times, amountOfVanillaExtractForBrownies);
    var outputPart1CocoaPowder = calculations(times, amountOfCocoaPowderForBrownies);
    var outputPart1Flour = calculations(times, amountOfFlourForBrownies);
    var outputPart1Salt = calculations(times, amountOfSaltForBrownies);
    var outputPart1BakingPowder = calculations(times, amountOfBakingPowderForBrownies);

    document.getElementById("browniesButter").innerHTML = outputPart1Butter + " cup butter";
    document.getElementById("browniesWhiteSugar").innerHTML = outputPart1Sugar + " cup white sugar";
    document.getElementById("browniesEggs").innerHTML = outputPart1Eggs + " eggs";
    document.getElementById("browniesVanillaExtract").innerHTML = outputPart1VaillaExtract + " teaspoon Vanilla Extract";
    document.getElementById("brownieCocoaPowder").innerHTML = outputPart1CocoaPowder + " cup Unsweetened cocoa powder";
    document.getElementById("browniesFlour").innerHTML = outputPart1Flour + " cup all-purpose flour";
    document.getElementById("browniesSalt").innerHTML = outputPart1Salt + " teaspoon Salt";
    document.getElementById("browniesBakingPowder").innerHTML = outputPart1BakingPowder + " teaspoon baking powder";


}
function ConverterDry1() {
    var amount = parseFloat(document.getElementById("cupAmount").value);
    var teaspoons= amount* 48;
    var Tablespoons= amount*16;

    document.getElementById("TeaSpoonsBox2").innerHTML= teaspoons;
    document.getElementById("TableSpoons").innerHTML= Tablespoons;
    var amount2= parseFloat(document.getElementById("tableSpoonAmount").value)

}
function ConverterDry2() {
    var amount2= parseFloat(document.getElementById("tableSpoonAmount").value);
    var teaspoons= amount2*3;
    var cups= amount2/16;

    document.getElementById("teaspoonsBox").innerHTML= teaspoons;
    document.getElementById("CupsBox").innerHTML= cups;


}
function ConverterDry3() {
    var amount2= parseFloat(document.getElementById("cupsAmounts").value);
    var pint= amount2/2;
    var quarts= pint/2;
    var gallons= quarts/4;

    document.getElementById("pintsBox").innerHTML= pint;
    document.getElementById("QuartBox").innerHTML= quarts;
    document.getElementById("gallonBox").innerHTML=gallons;


}
function ConverterDry4() {
    var amount2= parseFloat(document.getElementById("pintAmounts").value);
    var cups= amount2*2;
    var quarts= amount2/2;
    var gallons= quarts/4;

    document.getElementById("cupBox2").innerHTML= cups;
    document.getElementById("QuartBox2").innerHTML= quarts;
    document.getElementById("gallonBox2").innerHTML=gallons;


}
function ConverterDry5() {
    var amount2= parseFloat(document.getElementById("quartsAmounts").value);
    var gallons= amount2/4;





    var Pints= amount2*2;
    var cups= Pints*2;

    document.getElementById("cupBox3").innerHTML= cups;
    document.getElementById("pintsBox2").innerHTML= Pints;
    document.getElementById("gallonBox4").innerHTML=gallons;


}
function ConverterDry6() {
    var amount2= parseFloat(document.getElementById("gallonsAmounts").value);
    var quarts= amount2*4;





    var Pints= quarts*2;
    var cups= Pints*2;

    document.getElementById("cupBox4").innerHTML= cups;
    document.getElementById("QuartBox3").innerHTML= Pints;
    document.getElementById("gallonBox3").innerHTML=quarts;


}



function time() {

    var loops=0;
    var number= Math.pow(10,100);
while(number>loops){

    loops++;



}


}


function pictureChange() {
    var Thing= "life";
    var Thing2="Nope";

    var number=0;
    while( Thing!=Thing2) {
        if ( number==0){
            document.getElementById("PictureBox").src="images/864554.jpg";
                time();
            number=1;

        }
        if ( number==1){
            document.getElementById("PictureBox").src="images/pizza.jpg";
                time();
            number=2;

        }
        if ( number==2){
            document.getElementById("PictureBox").src="images/2514148.jpg";
                time();
            number=3;

        }
        if ( number==3){
            document.getElementById("PictureBox").src="images/1090243.jpg";
                time();
            number=0;

        }












    }




}