function displayBlock(id)
    {
        let div = document.querySelectorAll(".radio-group > .pay")
        

        div.forEach((each_div) => {
            each_div.style.display = "none";
        })

        let payopt = document.getElementById(id);
        

        payopt.style.display = "block";
    }
    function onClick()
    {
        
        window.location.assign("loading.html")
    }
    let ordersum=document.getElementById("ordersum")
let totalprice=document.getElementById("totalprice")
let address=document.getElementById("address");
let pricequant=document.getElementById("pricequant")

let cart1=JSON.parse(localStorage.getItem("cart")) || [];

localStorage.setItem("orderdata",JSON.stringify(cart1))

let data1=JSON.parse(localStorage.getItem("orderdata")) || [];

    let discprice=document.getElementById("discprice")
pricequant.innerText=cart1.length


window.addEventListener("load",function(){
    showData(cart1)
})

    function showData(data){
        let sum=0; 
    for(let i=0;i<data.length;i++){
        sum=sum+data[i][0].price*data[i][1]
    }
    
    
    itemprice.innerText="₹"+ sum;
    let disc=-Math.floor(sum*0.4);
    discprice.innerText="₹" +(-disc ) 
    
    totalprice.innerText= `₹${sum+disc+40}` ;


        data.forEach((el,index)=>{
            let card=document.createElement("div");
            
            card.setAttribute("class","cardwidth")
            let hr=document.createElement("hr")
            card.setAttribute("id","cardcard")
            let cardimg=document.createElement("div");
            cardimg.setAttribute("id","cardimg")
            let carddet=document.createElement("div")
            carddet.setAttribute("id","carddet")
        let image=document.createElement("img");
        image.setAttribute("src",el[0].image);
        
        
        
        
        let name=document.createElement("h3");
        name.innerText=el[0].name;
        
        let quant=document.createElement("p")
        quant.innerText=`Quantity: ${el[1]}`
        
        let seller=document.createElement("p");
        seller.innerText="Seller:SuperComNet";
        
        let price=document.createElement("h3")
        price.innerText="₹"+el[0].price*el[1];
        
        
        
        
        
        
        
        
        // let hr=document.createElement("hr");
        // hr.setAttribute("id","hrline")
        // let hr1=document.create/Element("hr");
        
        // totalprice.innerText=sum+disc+40;
        
        cardimg.append(image)
        
        carddet.append(name,seller,price,quant,hr)
        card.append(cardimg,carddet)
        ordersum.append(card)
        })
    }
    let userdeliver=document.getElementById("userdeliver")
    let userphone=document.getElementById("userphone")

let userdata=JSON.parse(localStorage.getItem("loggedUser")) || {};
let order= Math.floor(Math.random(9000000000)*9999999999)
order=`+91 ${order}`

userdeliver.innerText=userdata.name
userphone.innerText=order