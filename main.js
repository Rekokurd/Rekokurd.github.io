function anjam(){
  let nrxiAmro=document.getElementById('dolaramro').value
  let dolar=document.getElementById('dolarinput').value
  let dinnar=document.getElementById('dinnarinput').value
  let dolardabash=nrxiAmro/100;
  if (!isNaN(parseFloat(nrxiAmro))) {
    if (!isNaN(parseFloat(dolar))) {
      document.getElementById("here").innerHTML="دینار"+dolardabash*dolar
    }
    else if(!isNaN(parseFloat(dinnar))) {
      document.getElementById('here').innerHTML= dinnar*100/nrxiAmro+'$'
    } 
  }
}