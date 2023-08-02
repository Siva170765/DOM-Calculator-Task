let Head=document.createElement("h1");
Head.id="title"
Head.className="d-flex justify-content-center "
Head.textContent="Create a simple calculator  using DOM"
document.body.appendChild(Head);

let ShortDiscription=document.createElement("p");
ShortDiscription.id="description";
ShortDiscription.className="d-flex justify-content-center"
ShortDiscription.innerText="Calculator created by using DOM,Bootstrap and CSS"
document.body.appendChild(ShortDiscription);

let Parentdiv=document.createElement("div");
Parentdiv.setAttribute("class","container-fluid text-center ");

let Pagerow=document.createElement("div");
Pagerow.className="row d-flex justify-content-center align-items-center"
let Page=document.createElement("div");
Page.className="col-5 m-4 rounded p-5"
Page.style.backgroundColor= "black"

let Row1=document.createElement("div");
Row1.setAttribute("class","row m-3");
let col1=document.createElement("div");
col1.setAttribute("class","col p-4");
let col1input=document.createElement("input");
col1input.className="form-control rounded text-end fw-bold"
col1input.style.width="100%"
col1input.style.height="130%"
col1input.type="text"
col1input.id="result"
col1input.placeholder="0"


let Row2=document.createElement("div");
Row2.setAttribute("class","row m-4");
let Row2col1=document.createElement("div");
Row2col1.setAttribute("class","col fw-bold");
let Button1=document.createElement("button")
Button1.setAttribute("onclick","append(1)")
Button1.style.width="80%"
Button1.style.height="130%"
Button1.innerText="1"
Button1.id="1"
let Row2col2=document.createElement("div");
Row2col2.setAttribute("class","col fw-bold");
let Button2=document.createElement("button")
Button2.innerText="2"
Button2.id="2"
Button2.setAttribute("onclick","append(2)")
Button2.style.width="80%"
Button2.style.height="130%"
let Row2col3=document.createElement("div");
Row2col3.setAttribute("class","col");
let Button3=document.createElement("button")
Button3.innerText="3"
Button3.id="3"
Button3.setAttribute("onclick","append(3)")
Button3.style.width="80%"
Button3.style.height="130%"
let Row2col4=document.createElement("div");
Row2col4.setAttribute("class","col");
let Buttonplus=document.createElement("button")
Buttonplus.innerText="+"
Buttonplus.id="add";
Buttonplus.setAttribute("onclick","append('+')")
Buttonplus.style.width="80%"
Buttonplus.style.height="130%"

let Row3=document.createElement("div");
Row3.setAttribute("class","row m-4");
let Row3col1=document.createElement("div");
Row3col1.setAttribute("class","col");
let Button4=document.createElement("button")
Button4.innerText="4"
Button4.setAttribute("onclick","append(4)")
Button4.style.width="80%"
Button4.style.height="130%"
let Row3col2=document.createElement("div");
Row3col2.setAttribute("class","col");
let Button5=document.createElement("button")
Button5.innerText="5"
Button5.setAttribute("onclick","append(5)")
Button5.style.width="80%"
Button5.style.height="130%"
let Row3col3=document.createElement("div");
Row3col3.setAttribute("class","col");
let Button6=document.createElement("button")
Button6.innerText="6"
Button6.setAttribute("onclick","append(6)")
Button6.style.width="80%"
Button6.style.height="130%"
let Row3col4=document.createElement("div");
Row3col4.setAttribute("class","col");
let Buttonminus=document.createElement("button")
Buttonminus.innerText="-"
Buttonminus.id="subtract"
Buttonminus.setAttribute("onclick","append('-')")
Buttonminus.style.width="80%"
Buttonminus.style.height="130%"

let Row4=document.createElement("div");
Row4.setAttribute("class","row m-4");
let Row4col1=document.createElement("div");
Row4col1.setAttribute("class","col");
let Row4col2=document.createElement("div");
let Button7=document.createElement("button")
Button7.innerText="7"
Button7.setAttribute("onclick","append(7)")
Button7.style.width="80%"
Button7.style.height="130%"
Row4col2.setAttribute("class","col");
let Button8=document.createElement("button")
Button8.innerText="8"
Button8.setAttribute("onclick","append(8)")
Button8.style.width="80%"
Button8.style.height="130%"
let Row4col3=document.createElement("div");
Row4col3.setAttribute("class","col");
let Button9=document.createElement("button")
Button9.innerText="9"
Button9.setAttribute("onclick","append(9)")
Button9.style.width="80%"
Button9.style.height="130%"
let Row4col4=document.createElement("div");
Row4col4.setAttribute("class","col");
let Buttonmul=document.createElement("button")
Buttonmul.innerText="*"
Buttonmul.setAttribute("onclick","append('*')")
Buttonmul.style.width="80%"
Buttonmul.style.height="130%"

let Row5=document.createElement("div");
Row5.setAttribute("class","row m-4");
let Row5col1=document.createElement("div");
Row5col1.setAttribute("class","col");
let Row5col2=document.createElement("div");
let Button00=document.createElement("button")
Button00.innerText="."
Button00.setAttribute("onclick","append('.')")
Button00.style.width="80%"
Button00.style.height="130%"
Row5col2.setAttribute("class","col");
let Button0=document.createElement("button")
Button0.innerText="0"
Button0.setAttribute("onclick","append(0)")
Button0.style.width="80%"
Button0.style.height="130%"
let Row5col3=document.createElement("div");
Row5col3.setAttribute("class","col");
let Buttondot=document.createElement("button")
Buttondot.innerText="%"
Buttondot.setAttribute("onclick","append('%')")
Buttondot.style.width="80%"
Buttondot.style.height="130%"
let Row5col4=document.createElement("div");
Row5col4.setAttribute("class","col");
let Buttondiv=document.createElement("button")
Buttondiv.innerText="/"
Buttondiv.setAttribute("onclick","append('/')")
Buttondiv.style.width="80%"
Buttondiv.style.height="130%"

let Row6=document.createElement("div");
Row6.setAttribute("class","row m-2 p-3");
let Row6col1=document.createElement("div");
Row6col1.setAttribute("class","col");
let Buttonclr=document.createElement("button")
Buttonclr.id="clear";
Buttonclr.setAttribute("onclick","Clear()")
Buttonclr.innerText="CLR"
Buttonclr.style.width="80%"
Buttonclr.style.height="130%"
let Row6col2=document.createElement("div");
Row6col2.setAttribute("class","col");
let Buttondel=document.createElement("button")
Buttondel.innerText="DEL"
Buttondel.setAttribute("onclick","Delete()")
Buttondel.style.width="80%"
Buttondel.style.height="130%"
let Row6col3=document.createElement("div");
Row6col3.setAttribute("class","col-6");
let Buttonresult=document.createElement("button")
Buttonresult.setAttribute("onclick","result()")
Buttonresult.id="equal"
Buttonresult.style.width="90%"
Buttonresult.style.height="130%"
Buttonresult.innerText="="

document.body.appendChild(Parentdiv);
Parentdiv.appendChild(Pagerow)

Pagerow.appendChild(Page);
Page.append(Row1,Row2,Row3,Row4,Row5,Row6);
Row1.appendChild(col1);
col1.appendChild(col1input);

Row2.append(Row2col1,Row2col2,Row2col3,Row2col4);
Row2col1.appendChild(Button1)
Row2col2.appendChild(Button2)
Row2col3.appendChild(Button3)
Row2col4.appendChild(Buttonplus)

Row3.append(Row3col1,Row3col2,Row3col3,Row3col4);
Row3col1.appendChild(Button4)
Row3col2.appendChild(Button5)
Row3col3.appendChild(Button6)
Row3col4.appendChild(Buttonminus)

Row4.append(Row4col1,Row4col2,Row4col3,Row4col4);
Row4col1.appendChild(Button7)
Row4col2.appendChild(Button8)
Row4col3.appendChild(Button9)
Row4col4.appendChild(Buttonmul)

Row5.append(Row5col1,Row5col2,Row5col3,Row5col4);
Row5col1.appendChild(Button00)
Row5col2.appendChild(Button0)
Row5col3.appendChild(Buttondot)
Row5col4.appendChild(Buttondiv)

Row6.append(Row6col1,Row6col2,Row6col3);
Row6col1.appendChild(Buttonclr)
Row6col2.appendChild(Buttondel)
Row6col3.appendChild(Buttonresult)

let Button=document.querySelectorAll("button");
Button.forEach((Button)=>{
   Button.className="rounded fw-bold"
})

function append(value){
    let result=document.getElementById("result");
    result.value+=value;
}

function result(){
    let result=document.getElementById("result");
    result.value=eval(result.value)
}

function Clear(){
    let result=document.getElementById("result");
    result.value='';
}
function Delete(){
    let result=document.getElementById("result");
    result.value=String(result.value).slice(0,-1)
}

let Input=document.querySelector("input")
Input.addEventListener("keyup",(event)=>{
    let Array=["1","2","3","4","5","6","7","8","9","0","+","-","/","*",".","Enter","Shift","Backspace"];
    if(!Array.includes(event.key)){
        alert("Only Numbers are allowed")
        Delete()
    }
    if(event.key==="Enter"){
        result();
    }
    if(event.key===Backspace){
        Delete()
    }

    
});