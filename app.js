function calc(){
    const d=document.getElementById('disp');
    let str = d.innerHTML;
    let index = str.indexOf("\u221A");
    if (index !== -1) {
        str = str.replace(/√(\d+)/g, "Math.sqrt($1)");
        console.log(str);
        d.innerHTML=eval(str);
    }else{
        d.innerHTML=eval(d.innerHTML);
    }
    
}
function del(){
    document.getElementById('disp').innerHTML='';
}
function repl(symb){
    const d=document.getElementById('disp');
    d.innerHTML+=symb;
};
function rbow(){
    const d=document.getElementById('disp');
    const i=document.getElementById('rbow');
    d.innerHTML+=i.innerHTML;
};
function lbow(){
    const d=document.getElementById('disp');
    const i=document.getElementById('lbow');
    d.innerHTML+=i.innerHTML;
};
function sqrt(){
    const d=document.getElementById('disp');
    const i=document.getElementById('sqrt');
    d.innerHTML+=i.innerHTML;
};