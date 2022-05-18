// Calculator
// 

function calcVal()
{
   var qty,unitValue,prod,discount,total;
   qty = document.getElementById("qty").value;
   prod = document.querySelector('#prod');

   const btn = document.querySelector('#btn');
   btn.onclick = (event) => {
      event.preventDefault();
      // show the selected index
      console.log(prod.selectedIndex);
      console.log("qty: " + qty);

   }

   
   if(prod.selectedIndex == 0){
      unitValue = 10;
      discount=0.15;
   }

   if(prod.selectedIndex == 1){
      unitValue = 20;
      discount=0.2;
   }

   
   if(prod.selectedIndex == 2){
      unitValue = 10;
      discount=0.15;
   }

   if(prod.selectedIndex == 3){
      
      unitValue = 20;
      discount=0.2;
   
   }

   if(prod.selectedIndex == 4){
      
      unitValue = 20;
      discount=0.2;
   
   }

   total = unitValue * qty*(1-discount);

   console.log("total: " + total);

   document.getElementById("total").value = total+" LKR";
   return total;
}

