
let datas= JSON.parse(localStorage.getItem("reqdata"))||[]

window.addEventListener("load",function(){
    display(datas)
})


function display(data){
  
data.forEach((item,i)=>{

let tr= document.createElement("tr")

let orderid= document.createElement("td")
orderid.textContent=item.orderid

let name=  document.createElement("td")
name.textContent=item.name;

let email=  document.createElement("td")
email.textContent=item.email;


let amount=  document.createElement("td")
amount.textContent=`₹${item.amount}`

let view=  document.createElement("td")
view.textContent="View";

let approve=  document.createElement("td")
approve.textContent="Approve";

approve.setAttribute("class","button")

approve.style.backgroundColor="green"
approve.addEventListener("click",function(){
    alert("Order has been placed for shipping")
    green(item)
   data.splice(i,1)
   localStorage.setItem("reqdata",JSON.stringify(data))
   window.location.reload() 
})

// two button
let reject=  document.createElement("td")

reject.textContent="Reject";
reject.setAttribute("class","button")
reject.style.backgroundColor="red"

reject.addEventListener("click",function(i){
    
    alert("Order is rejected by admin")
    data.splice(i,1)
    localStorage.setItem("reqdata",JSON.stringify(data))
    window.location.reload()
})

tr.append(orderid,name,email,amount,view,reject,approve)

document.querySelector("#one").append(tr)

})
}

// approve adding function
function green(el){

  let approvedata= JSON.parse(localStorage.getItem("approved"))||[]
  
  approvedata.push(el)

  localStorage.setItem("approved",JSON.stringify(approvedata))
}

let approvedata= JSON.parse(localStorage.getItem("approved"))||[]


// approve display function
window.addEventListener("load",function(){
    approvedisplay(approvedata)
})


function approvedisplay(data){
    document.querySelector("#two").innerHTML=null;
data.forEach((item,i)=>{

let tr= document.createElement("tr")

let orderid= document.createElement("td")
orderid.textContent=item.orderid

let name=  document.createElement("td")
name.textContent=item.name;

let email=  document.createElement("td")
email.textContent=item.email;


let amount=  document.createElement("td")
amount.textContent=`₹${item.amount}`

let view=  document.createElement("td")
view.textContent="View";

let status=  document.createElement("td")
status.textContent="Ready for shipping";



status.style.backgroundColor="#43A047"




tr.append(orderid,name,email,amount,view,status)

document.querySelector("#two").append(tr)

})
}
let admin=document.getElementById("admin");
admin.addEventListener("click",()=>{
    window.location.assign("index.html")
    // window.location.assign("loading.html")
    // console.log("yes")
    
})


