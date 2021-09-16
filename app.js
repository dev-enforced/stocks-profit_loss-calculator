var form =document.querySelector(".main-body");
var inputs=document.querySelectorAll(".inputs");
var outputDiv=document.querySelector(".main-output");
var outputMsg=document.querySelector("#main-msg");
var outputImg=document.querySelector("#image-show");
var body=document.querySelector("body");
var flag=0;
function formResponseHandler(event){
    event.preventDefault();
    var cost=Number(inputs[0].value);
    var qty=Number(inputs[1].value);
    var current=Number(inputs[2].value);
    calculator(cost,qty,current);
}

function show(stats,result,resPer){
    if(stats===1){
        outputDiv.style.display="block";
        outputMsg.style.color='#d62828';
        outputMsg.innerText=`Unfortunately a total loss of ${result} units has been incurred in this scenario at a loss of ${resPer}%.`
        outputImg.src='https://apps.indianmoney.com/images/article-images/how-to-survive-in-stock-market-downfall.jpg?t=1629463197'
    }else if(stats===2){
        outputDiv.style.display="block";
        outputMsg.style.color='#D9D9D9';
        outputMsg.innerText=`Congratulations a total profit of ${result} units has been earned in this scenario at a profit of ${resPer}%.`
        outputImg.src="https://taxguru.in/wp-content/uploads/2020/06/Stock-Market-is-rising.jpg"
    }

}

function calculator(cp,number,sp){
    if(cp>sp){
        var loss=cp-sp
        var totalLoss=loss*number;
        var lossInPercent=(loss*100)/cp;
        lossInPercent=lossInPercent.toFixed(2);
        flag=1;
        show(flag,totalLoss,lossInPercent);
    }else if(sp>cp){
        var profit=sp-cp;
        var totalProfit=profit*number;
        var profitInPercent=(profit*100)/cp;
        profitInPercent=profitInPercent.toFixed(2);
        flag=2;
        show(flag,totalProfit,profitInPercent);
    }else if(sp===cp){
        var noReturn=sp-cp;
        outputDiv.style.display="block";
        outputMsg.style.color='#ffff';
        outputMsg.innerText=` In this scenario no profit or loss has been received.`
        outputImg.src='https://scontent.fbom37-1.fna.fbcdn.net/v/t1.18169-9/p240x240/1888517_1449560365347876_4970078213398423972_n.png?_nc_cat=109&ccb=1-5&_nc_sid=85a577&_nc_ohc=Bl3QQNuxb9EAX9dDMhT&_nc_ht=scontent.fbom37-1.fna&oh=b8b11cd8133cb656816cf176498315e7&oe=61672123'
    }
}
form.addEventListener('submit',(e)=>formResponseHandler(e))