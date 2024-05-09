
function myFunction(array1,array2) {
 


    if(array1.length!==array2.length){
     console.log("Arrayin uzunlugu eyni deyil!")
    } 

    let newArray=[]
     for(let i=0; i<array1.length;i++){
      newArray.push(array1[i] * array2[i]);
     }
     return newArray
   }
   
   console.log( myFunction([3,4,2,1,7,8],[3,4,1,6,7]) )
   
