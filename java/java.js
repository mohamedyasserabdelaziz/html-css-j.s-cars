form.addEventListener("submit" , function(submition){
    let submitcounter =0;
    let validpassword = true;
    let validphone = true;
    let digitcounter = 0;
    let specialcounter =0
    let phonelength =0;
 
 if (isNaN(password.value[0])==true){
     if (password.value[0]!= password.value[0].toUpperCase())
     validpassword ==false;
 }
 if (isNaN(password.value[0]) == false){
     validpassword ==false;
 }
 for (let i = 0 ; i<password.value.length ; i++){
     if (isNaN(password.value[i]) == false)
         digitcounter++;
     else if (password.value[i] == "-" || password.value[i] == "_"||password.value[i] == "&"||password.value[i] == "#"||password.value[i] == "*")
     specialcounter ++;
    else if (password.value[i] == " ")
    validpassword =false;
 
 }
 if (digitcounter < 1 )
 validpassword =false;
 if (specialcounter !=1)
 validpassword =false;
 if (password.value.length != 8)
 validpassword =false;
 
for (let i = 0 ;i< phone.value.length ; i++){
    phonelength++;
    if (isNaN(phone.value[i]) ==true)
    validphone = false;
}
if (phonelength !=11)
validphone =false;
 
console.log(phonelength);
 
 
 if (validphone == false || validpassword == false ){
    submition.preventDefault(); 
     if (validpassword == false){
        document.getElementById("passworddiv").appendChild(error);
   if (submitcounter ==0){
    password.onfocus = function (){
        document.getElementById("errorspan").remove();
    }
    submitcounter =1;
    console.log(submitcounter);
   }
     }
     if (validphone == false ){
        document.getElementById("phonediv").appendChild(pherror);
            phone.onfocus = function (){
                document.getElementById("pherrorspan").remove();
            submitcounter =1;
        }
 
     }
 
    }
 
})
 