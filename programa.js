function promediar() {
    var a,b,c,d,e;
  

    //covertir el valor de x a un entero 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    d=document.getElementById("d").value;
    e=document.getElementById("e").value;

    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
    d=parseFloat(d);
    e=parseFloat(e);

    a=a*(10/100);
    b=b*(20/100);
    c=c*(50/100);
    d=d*(5/100);
    e=e*(15/100);
     
    let f;
    f=a+b+c+d+e;
  
  

    document.write(f);
    document.write("<br>");
    
    if(f<3.0) {
        document.write("LO SENTIMOS :(, MEJOR SUERTE LA PROXIMA")
    }
    else { 
        document.write("!!PASASTE¡¡ FELICITACIONES")   
    }



}