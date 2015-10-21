//function test() {
//    "use strict";
//    window.alert("test is working");
//}


//Validations for Delivery information form

//Validate that a name is entered and contains no numbers.

function valname() {
    'use strict';
    var name = (document.getElementById('inName').value);
//    window.alert("Your name is " + name);
    var patt = /[0-9]/g;
    if ((patt.test(name)) || name.length < 4) {
        window.alert("Please fill in your full name without numbers.");
        document.getElementById('inName').focus();
        return false;
    } else {
//        window.alert("Name is Good");
        return true;
    }
}


//Add text box if "other" is selected from dropdown only visible if "other" is selected.
    
    
    
//Validate that an entry was made for the address field.  

function valad() {
    'use strict';
    var ad = (document.getElementById('inAddress').value);
    //window.alert("Your address is " + ad);
    //window.alert(ad.length);
    if (ad.length < 4) {
        window.alert("You must fill in your Address");
        document.getElementById('inAddress').focus();
        return false;
    } else {
        return true;
        //window.alert("Address is good.");
    }
}


//Validate that an entry was made for city.
    
function valcity() {
    'use strict';
    var city = (document.getElementById('inCity').value);
    //window.alert("Your city is " + city);
    //window.alert(city.length);
    if (city.length < 2) {
        window.alert("You must fill in your City");
        document.getElementById('inCity').focus();
        return false;
    } else {
        return true;
        //window.alert("City is good.");
    }
}
    
//Validate that State has 2 characters.    
    
function valst() {
    'use strict';
    var st = (document.getElementById('inState').value);
       // window.alert("Your state is " + st);
       // window.alert(st.length);
    if (st.length !== 2) {
        window.alert("Your state should be 2 characters.");
        document.getElementById('inState').focus();
        return false;
    } else {
        return true;
        //window.alert("State is good.");
    }
}
    
    
//Validate that Zip Code is formatted correctly.
  
function valzip() {
    'use strict';
    var zip = (document.getElementById('inZip').value);
    //window.alert("Your zip is " + zip);
    var zipFormat = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (zip.match(zipFormat)) {
        return true;
        //window.alert("zip code is good.");
    } else {
        window.alert("Please enter a valid zip code.");
        document.getElementById('inZip').focus();
        return false;
    }
}
    
//Validate that phone number is formatted correctly.

function valph() {
    'use strict';
    var phone = (document.getElementById('inPhone').value);
     //window.alert("Your phone number  is " + phone);  
    var phFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phFormat)) {
        return true;
        //window.alert("Phone number is good.");
    } else {
        window.alert("Please enter a valid phone number.");
        document.getElementById('inPhone').focus();
        return false;
    }
}
 
        
//Validate that email is formatted correctly.
    
function valem() {
    'use strict';
    var em = (document.getElementById('inEmail').value);
     //window.alert("Your email is " + em);  
    var emFormat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (em.match(emFormat)) {
//        window.alert("Email is good.");
        return true;
    } else {
        window.alert("Please enter a valid eMail address.");
        document.getElementById('inEmail').focus();
        return false;
    }
     
}

 //Progammatically add drop-down to hand tossed crust option to choose size after choosing crust type. How do I add "show" to this when the radio button for hand tossed crust is selected?  

//function hcrust() {
//    'use strict';
//    //var hcrad = document.getElementById('handTossed').checked;
//    var handcr = document.getElementById('handcr');
//    var hcarray = ["Small = $9.99", "Medium = $12.99", "Large = $14.99"]
//    var hcSelectList = document.createElement('hcSelect');
//    handcr.appendChild(hcSelectList);
//    for (var i = 0; i < hcarray.length, i++) {
//    var hcoption = document.createElement("hcoption");
//    hcoption.value = hcarray[i];
//    hcoption.text = hcarray[i];
//    hcSelectList.appendChild(hcoption);
//    }
//}
//    
 
function calculate_price() {
    'use strict';
    var price = 0.00;
    var obj =  document.getElementById('chooseCheese');
    var sauce_obj = document.getElementById('chooseSauce');
    var selection = obj.options[obj.selectedIndex].value;
    var sauce_selection = sauce_obj.options[sauce_obj.selectedIndex].value; // Make new sauce selection variable

// Calculate cost of cheese
    if (selection === 'double') {
        price = price + 2.99;
    }
    if (selection === 'extra') {
        price = price + 3.99;
    }
// Calculate cost of sauce if the selection == sauce, increase price accordingly
    
    
    if (sauce_selection === 'hearty') {
        price = price + 0.99;
    }
    if (sauce_selection === 'bbq') {
        price = price + 1.99;
    }

// Calculate cost of toppings 

    if (document.getElementById('pepperoni').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('sausage').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('ham').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('bacon').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('salami').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('peppers').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('olives').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('jalap').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('mush').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('pine').checked === true) {
        price = price + 0.99;
    }
    if (document.getElementById('onion').checked === true) {
        price = price + 0.99;
    }
    if (price === 0) {
        document.getElementById('txtPrice').value = "$ 0.00";
    } else {
        document.getElementById('txtPrice').value = "$" + price;
    }
}



//Copy delivery form info into billing form when "same as delivery" is checked.

function fillbill() {
    'use strict';
    var bilchk = document.getElementById('billchk').checked;
    var innam = document.getElementById('inName').value;
    var inad = document.getElementById('inAddress').value;
    var inrm = document.getElementById('inRoom').value;
    var inct = document.getElementById('inCity').value;
    var inst = document.getElementById('inState').value;
    var inzp = document.getElementById('inZip').value;
    var inph = document.getElementById('inPhone').value;
    var inem = document.getElementById('inEmail').value;
//    window.alert(bilchk);
//    window.alert("inName is " + innam);
    if (bilchk === true) {
        document.getElementById('bilName').value = innam;
        document.getElementById('bilAddress').value = inad;
        document.getElementById('bilRoom').value = inrm;
        document.getElementById('bilCity').value = inct;
        document.getElementById('bilState').value = inst;
        document.getElementById('bilCity').value = inct;
        document.getElementById('bilZip').value = inzp;
        document.getElementById('bilPhone').value = inph;
        document.getElementById('bilEmail').value = inem;
    } else if (document.getElementById('billchk').checked === false) {
        document.getElementById('bilName').value = "";
        document.getElementById('bilAddress').value = "";
        document.getElementById('bilRoom').value = "";
        document.getElementById('bilCity').value = "";
        document.getElementById('bilState').value = "";
        document.getElementById('bilCity').value = "";
        document.getElementById('bilZip').value = "";
        document.getElementById('bilPhone').value = "";
        document.getElementById('bilEmail').value = "";
    }
}





//Billing information form
//Validate that a name is entered and contains no numbers in billing form.

function valbname() {
    'use strict';
    var nameb = (document.getElementById('bilName').value);
    //window.alert("Your name is " + nameb);
    var patt = /[0-9]/g;
    if ((patt.test(name)) || name.length < 4) {
        window.alert("Please fill in your full name without numbers.");
        document.getElementById('bilName').focus();
        return false;
    } else {
        //window.alert("Name is Good");
        return true;
    }
}

//Validate that an entry was made for the billing address field.  

function valbad() {
    'use strict';
    var adb = (document.getElementById('bilAddress').value);
    //window.alert("Your address is " + adb);
    //window.alert(adb.length);
    if (adb.length < 4) {
        window.alert("You must fill in your Address");
        document.getElementById('bilAddress').focus();
        return false;
    } else {
        return true;
        //window.alert("Address is good.");
    }
}


//Validate that an entry was made for city in billing form.
    
function valbcity() {
    'use strict';
    var cityb = (document.getElementById('bilCity').value);
    //window.alert("Your city is " + cityb);
    //window.alert(cityb.length);
    if (cityb.length < 2) {
        window.alert("You must fill in your City");
        document.getElementById('bilCity').focus();
        return false;
    } else {
        return true;
        //window.alert("City is good.");
    }
}
    
//Validate that State has 2 characters.    
    
function valbst() {
    'use strict';
    var stb = (document.getElementById('bilState').value);
       // window.alert("Your state is " + stb);
       // window.alert(stb.length);
    if (stb.length !== 2) {
        window.alert("Your state should be 2 characters.");
        document.getElementById('bilState').focus();
        return false;
    } else {
        return true;
        //window.alert("State is good.");
    }
}
    
    
//Validate that Zip Code is formatted correctly.
  
function valbzip() {
    'use strict';
    var zipb = (document.getElementById('bilZip').value);
    //window.alert("Your zip is " + zipb);
    var zipbFormat = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (zipb.match(zipbFormat)) {
        return true;
        //window.alert("zip code is good.");
    } else {
        window.alert("Please enter a valid zip code.");
        document.getElementById('bilZip').focus();
        return false;
    }
}
    
//Validate that phone number is formatted correctly.

function valbph() {
    'use strict';
    var phoneb = (document.getElementById('bilPhone').value);
     //window.alert("Your phone number  is " + phoneb);  
    var phFormatb = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneb.match(phFormatb)) {
        return true;
        //window.alert("Phone number is good.");
    } else {
        window.alert("Please enter a valid phone number.");
        document.getElementById('bilPhone').focus();
        return false;
    }
}
 
        
//Validate that email is formatted correctly.
    
function valbem() {
    'use strict';
    var emb = (document.getElementById('bilEmail').value);
     //window.alert("Your email is " + emb);  
    var embFormat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (emb.match(embFormat)) {
        return true;
        //window.alert("Email is good.");
    } else {
        window.alert("Please enter a valid eMail address.");
        document.getElementById('bilEmail').focus();
        return false;
    }
     
}


//Credit Card Validation

//Check that entry is numeric and card type; alert back to user; validate that if visa digits = 13 or 16, if mastercard digits=16, and if amex digits=15.

function valccn() {
    'use strict';
    var ccn = document.getElementById('ccnum').value;
    window.alert("Your credit card number is " + ccn);
    var cct = document.getElementById('ccnum').value;
    var first = cct.charAt(0);
    var second = cct.charAt(1);
    if (isNaN(ccn) === true) {
        window.alert("Credit card entry must be a number.");
        document.getElementById('ccnum').focus();
        return false;
    }
    if (((first === 4) && (cct.length === 13)) || ((first === 4) && (cct.length === 16))) {
        window.alert("Your card is a Visa.");
    } else if ((first === 3) && (second === 7) && (cct.length === 15)) {
        window.alert("Your card is an American Express.");
    } else if (((first === 5) && (second === 1) && (cct.length === 16)) || ((first === 5) && (second === 2) && (cct.length === 16)) || ((first === 5) && (second === 3) && (cct.length === 16)) || ((first === 5) && (second === 4) && (cct.length === 16)) || ((first === 5) && (second === 5) && (cct.length === 16))) {
        window.alert("Your card is a MasterCard.");
    } else {
        window.alert("Number not a recognized card. Please re-enter your number.");
    }
}



//Luhn validation with error next to input field

function ckLuhn(crcn) {
    'use strict';
    var crcn = document.getElementById('ccnum').value;
    var sum = 0;
    var ndigits = (crcn.length);
    var parity = ndigits % 2;
    for (var i=0; i < ndigits; i++) {
        var digit = parseInt(crcn.charAt(i))
        if (i % 2 == parity) digit *= 2;
        if (digit > 9) digit -= 9;
        sum += digit;
    }
    window.alert((sum % 10) == 0);
}




//Validate cvc has 3 digits

function valcvc() {
    'use strict';
    var cccvc = document.getElementById('cvc').value;
    window.alert("Your cvc code is " + cccvc);
    if (cccvc.length === 3) {
        window.alert("CVC has 3 digits");
        return true;
    } else {
        window.alert("Please re-enter your 3 digit CVC code.");
        document.getElementById('cvc').focus();
        return false;
    }
}
     
//Validate expiration date has not passed


function valdt() {
    'use strict';
    var ccm = document.getElementById('ccmonth').value;
    window.alert("Credit Card month is " + ccm);
    var ccy = document.getElementById('ccyear').value;
    window.alert("Credit card year is " + ccy);
    
    var today = new Date();
    var mnth = today.getMonth()+1; //January is 0
    var yr = today.getFullYear();
    yr = yr.toString().substr(2,2);
     window.alert("Current month is " + mnth);
     window.alert("Current year is " + yr);
//    var mnth = (document.getMonth() + 1);
//    window.alert("Current month is " + mnth);
//    var yr = documen.getYear();
//    window.alert("Current year is " + yr);
    
    if (ccy < yr) {
        window.alert("Your Credit Card has expired.");
    } else if ((ccy == yr) && (ccm < mnth)) {
        window.alert("Your Credit Card has expired.");
    } else {
        window.alert("Your Credit Card is current.");
    }
}
    
    
    
    








    
    