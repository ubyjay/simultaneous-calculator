alert("PLEASE INPUT THE COEFFICIENT OF A,B,C,D,M, AND N BELOW 😊")
function getvals()
{  

   let as = document.getElementById("a");

   let bs = document.getElementById("b");

   let ms = document.getElementById("m");

   let cs = document.getElementById("c");

   let ds = document.getElementById("d");

   let ns = document.getElementById("n");

   

    a  = as.value - 0; // convert to numbers

    b  = bs.value - 0;

    m  = ms.value - 0;

    c  = cs.value - 0;

    d  = ds.value - 0;

    n  = ns.value - 0;

}
function output()

{   

    let message = document.getElementById("message")

    message.innerHTML = "x = " + x + " y = " + y + ".";

}
function ok()

{

    getvals();
    if(!a || !b || !c ||!m || !d || !n){
       alert('Missing Some Values 😢');
     } else{
    x = (n*b-m*d)/(b*c-a*d);

    y = (m*c-n*a)/(b*c-a*d);

    x = x.toFixed(3);

    y = y.toFixed(3);

    output();
     }

}

// alert("PLEASE INPUT THE COEFFICIENT OF A,B,C. BELOW 😊")
// const button = document.getElementById('button')
// let vertexCoords = document.getElementById('vertexCoords')
// let oneBelow = document.getElementById('oneBelow')
// let twoBelow = document.getElementById('twoBelow')
// let oneAbove = document.getElementById('oneAbove')
// let twoAbove = document.getElementById('twoAbove')
// let yIntercept = document.getElementById('yIntercept')
// let zeroes = document.getElementById('zeroes')
// let aValue = document.getElementById('aValue')
// let bValue = document.getElementById('bValue')
// let cValue = document.getElementById('cValue')
// let equation = document.getElementById('fullEquation')
  

// const calculate = () => {
//     let a =  parseFloat(aValue.value) 
//     let b = parseFloat(bValue.value) 
//     let c = parseFloat(cValue.value) 
//     let negativeB = -1 * b
//     let twoA = 2 * a
//     // if the input values arent complete
//     if(!a || !b || !c){
//         alert('Missing Some Values 😢');
//     } else{
//         // will be using the Quadratic formulae 
//         let bSquared = Math.pow(b,2)
//         let discriminant = bSquared - (4 * a * c)
//         let squareRoot = Math.sqrt(discriminant)

//         let result1 = (negativeB-squareRoot)/twoA
//         let result2 = (negativeB+squareRoot)/twoA
//         let xVertex = negativeB / twoA
//         let xSquared = Math.pow(xVertex,2)
//         let yVertex = (a * xSquared) + (b * xVertex) + c

//         let below1X = xVertex-1 
//         let below1XSquared = Math.pow(below1X,2)
//         let below1Y = (a * below1XSquared) + (b * below1X) + c

//         let below2X =  xVertex - 2
//         let below2XSquared = Math.pow(below2X, 2)
//         let below2Y = (a * below2XSquared ) + (b * below2X) + c

//         let above1X = xVertex + 1 
//         let above1XSquared = Math.pow(above1X,2)
//         let above1Y =  (a * above1XSquared) + (b * above1X) + c

//         let above2X = xVertex + 2
//         let above2XSquared = Math.pow(above1X, 2)
//         let above2Y = (a * above2XSquared) + (b * above2X) + c


//         vertexCoords.innerHTML = `Vertex: (${xVertex.toFixed(2)}, ${yVertex.toFixed(2)})`
//         oneBelow.innerHTML = `1 below: (${below1X.toFixed(2)}, ${below1Y.toFixed(2)})`
//         twoBelow.innerHTML = `2 below: (${below2X.toFixed(2)}, ${below2Y.toFixed(2)})`
//         oneAbove.innerHTML =  `1 above: (${above1X.toFixed(2)}, ${above1Y.toFixed(2)})`
//         twoAbove.innerHTML =  `2 above: (${above2X.toFixed(2)}, ${above2Y.toFixed(2)})` 
//         if(c=== 0){
//             equation.innerHTML = `${a}x^2 + ${a}x`
//         }
//         else {
//             equation.innerHTML = `Equation: ${a}x^2 +${b}x +${c}`
//         }
//         if(isNaN(squareRoot)){
//             zeroes.innerHTML = `No Real Solutions` //as if we are dealing with imaginary numbers which needs to be expressed as i
//         }
//         else{
//             zeroes.innerHTML = `X = ${result1.toFixed(2)} or X = ${result2.toFixed(2)}` // same thing here, we are rounding to 2 decimal palces
//         }

//     }

// }
   button.addEventListener('click',ok)
   