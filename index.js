
var pegjs = require("./PegParser.js");


const obj = { 
    Quant:5,
    Name: null,
    Quantity: 2,
    Unit: null, 
    'Unit Price': "12",
    'Unit Rate': 10,
    'Discount Percentage': "0.1",
    Tax: "0.05",
    'Shipping Cost': "5",
"num1":"5",
"num2":"5",
"gst":"5"
};

let formula1 = `MUL(ADD({num1}, {num2}), {gst})`; 
let formula2 = `ADD(ADD(ADD(ADD(ADD(ADD(ADD(2604,20),50),MUL(2,25)),MUL(4,10)),MUL(4,5)),80),MUL(MUL(ADD(ADD(ADD(2604,MUL(4,10)),MUL(4,5)),MUL(2,25)),2),0.01))`; 
let formula3 = `REGEX('^[0-9]{10}$')`;
let val ='9874563215'
let formula4 = `SUB(MUL({Quantity}, {Unit Price}), MUL({Quantity}, {Discount Percentage}))`;
let formula5 = `MUL(MUL({Quantity}, {Unit Price}), {Tax})`; 
let formula6 = `DIVI(ADD(MUL({Quantity}, {Unit Price}), {Shipping Cost}), SUB(1, {Discount Percentage}))`;
let formula7= `MUL({Quantity},{Unit})`;

// ADD(ADD(ADD(ADD(ADD(ADD(ADD({Base Fare},{Service Charge}),{Airport Convenience Charge}),MUL({Number of Commodities},25)),MUL({Number of Bags - Above 70x50 cm},10)),MUL({Number of Bags - Below 70x50 cm},5)),{Toll Charge}),MUL(MUL(ADD(ADD(ADD({Base Fare},MUL({Number of Bags - Above 70x50 cm},10)),MUL({Number of Bags - Below 70x50 cm},5)),MUL({Number of Commodities},25)),{gst%}),0.01)) 
// // let amount1 = pegjs.evaluate(formula1, obj);
// console.log("amount1===>",amount1)
//expression in pegjs===> MUL(5, {Unit Price})======> MUL(5, 12)
//60
// let Invoice_Value_INR="99878.9";
// let freight_exch_rate =89.9;
// let freight_inr =null;
// let insurance_exch_rate=89.9    
// let insurance_inr =null;
// let newObj={
//     "Invoice_Value_INR":"99878.9",
//    "freight_exch_rate":89.9,
//     "freight_inr":null,
//     "insurance_exch_rate":89.9,
//     "insurance_inr":null
// }
let final =`{Invoice_Value_INR}-({freight_exch_rate}*{freight_inr})-({insurance_exch_rate}*{insurance_inr})` 
let final2=`SUB({Invoice Value INR},SUB(MUL({freight_exch_rate},{freight_inr}),MUL({insurance_exch_rate},{insurance_inr})))`
let amount2= pegjs.evaluate(formula4,obj)
console.log("amount2==>",amount2)
// //ADD(MUL(2, {Unit Price}), {Shipping Cost})=====>expression in pegjs===> ADD(MUL(2, 12), {Shipping Cost}) ====> ADD(MUL(2, 12), 5)
// //29

// let amount3 = pegjs.evaluate(formula3,obj)
// console.log(amount3)
// //expression in pegjs===> SUB(MUL(2, {Unit Price}), MUL(2, {Discount Percentage}))=========> SUB(MUL(2, 12), MUL(2, {Discount Percentage}))==>SUB(MUL(2, 12), MUL(2, 0.1))
// //23.8

// let amount4 = pegjs.evaluate(formula4,obj)
// console.log("amount4===>",amount4)
// //expression in pegjs===> MUL(MUL(2, {Unit Price}), {Tax})======>MUL(MUL(2, 12), {Tax})======>MUL(MUL(2, 12), 0.05)
// //1.2000000000000002

// let amount5 = pegjs.evaluate(formula5,obj)
// console.log("amount5===>",amount5)
// //DIVI(ADD(MUL(2, {Unit Price}), {Shipping Cost}), SUB(1, {Discount Percentage}))====>DIVI(ADD(MUL(2, 12), {Shipping Cost}), SUB(1, {Discount Percentage}))===>DIVI(ADD(MUL(2, 12), {Shipping Cost}), SUB(1, 0.1))====>DIVI(ADD(MUL(2, 12), 5), SUB(1, 0.1))
// //32.22222222222222

// // let amount6 = pegjs.evaluate(formula6,obj)
// // console.log("amount6",amount6)