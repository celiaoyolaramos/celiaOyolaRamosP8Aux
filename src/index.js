//*****************************************PREGUNTA 1*****************************************************

const calcAverage=(parametro1)=>{
    if(parametro1 instanceof Array){
        let suma=parametro1.reduce((acumulador,parametro1)=>acumulador+parametro1);
        let promedio=suma/parametro1.length;
        return promedio;
    }else{
        throw TypeError("no es una cadena de valores")
    }
}
const checkWinner =(avgRicks,avgMortys)=>{
    if(avgRicks>=100 && avgMortys>=100){
        if(avgRicks>avgMortys){
             console.log("los Rickis ganan",avgRicks,"contra",avgMortys);
        }
        if(avgMortys>avgRicks){
            console.log("los Mortys ganan",avgMortys,"contra",avgRicks);
        }
        if(avgRicks==avgMortys){
            console.log("existe un empate entre ambos equipos los Rickis y los Mortys con",avgRicks);
        }
    }
    
    if(avgRicks<100 && avgMortys<100){
        console.log("ambos equipos perdieron los Rickis con:",avgRicks,"y los Mortys con:",avgMortys);
    }

}
const Ricks=calcAverage([97,112,101]);
const Mortys=calcAverage([109,95,106]);
console.log(checkWinner(Ricks,Mortys));
//*****************************************PREGUNTA 2*******************************************************


//-----------------------Parte 1--------------------------
const calcTip =(factura)=>{
    let tip=0;
     tip=(factura<=300? tip=factura*0.15:tip=factura*0.2);
    
    return tip;
}
//console.log(calcTip(1275));
//----------------------Parte 2----------------------------
const bills=[22,295,176,440,37,105,10,1100,86,52];
let tips=[];
let totals=[];
let num=0;
let num2=0;

for(let i=0;i<bills.length;i++){
    num=calcTip(bills[i]);
    tips.push(num);
}
console.log(tips);
for(let i=0;i<bills.length;i++){
        num2=bills[i]+tips[i];
        totals.push(num2);
}
console.log(totals);

const Promedio =(arreglo)=>{
    if(arreglo instanceof Array){
        let suma=arreglo.reduce((acumulador,arreglo)=>acumulador+arreglo);
        let promedio=suma/arreglo.length;
        return promedio;
    }else{
        throw TypeError("no es una cadena de valores")
    }

}
//calculando el promedio de los 3 arrays
console.log(Promedio(bills));
console.log(Promedio(tips));
console.log(Promedio(totals));




