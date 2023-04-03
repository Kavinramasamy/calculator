function clickme(bt){
    var input_screen=document.getElementById("screen");
    try{
        switch(bt){
            case 1: input_screen.value=input_screen.value+1;break;
            case 2: input_screen.value=input_screen.value+2;break;
            case 3: input_screen.value=input_screen.value+3;break;
            case 4: input_screen.value=input_screen.value+4;break;
            case 5: input_screen.value=input_screen.value+5;break;
            case 6: input_screen.value=input_screen.value+6;break;
            case 7: input_screen.value=input_screen.value+7;break;
            case 8: input_screen.value=input_screen.value+8;break;
            case 9: input_screen.value=input_screen.value+9;break;
            case 0: input_screen.value=input_screen.value+0;break;
            case '=':input_screen.value=eval(input_screen.value);break;
            case '+':input_screen.value=input_screen.value+"+";break;
            case '-':input_screen.value=input_screen.value+"-";break;
            case '/':input_screen.value=input_screen.value+"/";break;
            case '*':input_screen.value=input_screen.value+"*";break;
            case 'c':input_screen.value="";break;
        }
    }
    catch{
        alert("Error")
    }
}
