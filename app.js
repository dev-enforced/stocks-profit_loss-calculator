var form =document.querySelector(".main-body");
var inputs=document.querySelectorAll(".inputs");
var outputDiv=document.querySelector(".main-output");
var outputMsg=document.querySelector("#main-msg");
var outputImg=document.querySelector("#image-show");
var body=document.querySelector("body");
var status=0;
function formResponseHandler(event){
    event.preventDefault();
    var cost=Number(inputs[0].value);
    var qty=Number(inputs[1].value);
    var current=Number(inputs[2].value);
    calculator(cost,qty,current);
}

function show(stats,result,resPer){
    if(stats==1){
        outputDiv.style.display="block";
        outputMsg.style.color='#d62828';
        outputMsg.innerText=`Unfortunately a total loss of ${result} units has been incurred in this scenario at a loss of ${resPer}%.`
        outputImg.src='https://apps.indianmoney.com/images/article-images/how-to-survive-in-stock-market-downfall.jpg?t=1629463197'
    }else if(stats==2){
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
        status=1;
        show(status,totalLoss,lossInPercent);
    }else{
        var profit=sp-cp;
        var totalProfit=profit*number;
        var profitInPercent=(profit*100)/cp;
        profitInPercent=profitInPercent.toFixed(2);
        status=2;
        show(status,totalProfit,profitInPercent);
    }
}
form.addEventListener('submit',(e)=>formResponseHandler(e))