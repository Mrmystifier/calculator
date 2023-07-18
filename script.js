let input = document.getElementById("inputBox");
inputBox.addEventListener('keydown', event => {
    event.preventDefault();
    return false;
  });
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
let buttons = document.querySelectorAll("button");
let symbolArr = ['+','-','*','/','%']
let dot = ["."]
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        audio.play();
        let inputArr = input.value.split("");
        inputArr[inputArr.length] = e.target.innerHTML;
        console.log(inputArr);
        if(input.value == "" && (e.target.innerHTML == '=' || e.target.innerHTML == '+' || e.target.innerHTML == '*' || e.target.innerHTML == '/' || e.target.innerHTML == '%')){
            string = "";
            input.value = string;
            inputArr = []
        }
        else if(input.value == "-" && (e.target.innerHTML == '=' || e.target.innerHTML == '+' || e.target.innerHTML == '*' || e.target.innerHTML == '/' || e.target.innerHTML == '%')){
            string = "-";
            input.value = string;
            inputArr = [];
        }
        else if(symbolArr.includes(inputArr[inputArr.length-1]) && symbolArr.includes(inputArr[inputArr.length-2])){
            string = (string.substring(0,string.length-1)).concat(inputArr[inputArr.length-1]);
            input.value = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            inputArr = []
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            inputArr = []
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            if(e.target.innerHTML == '%'){
                let strN;
                string = eval(string);
                string = string * 0.01;
                strN = string.toString();
                strN = strN.substring(0, strN.length);
                input.value = strN
                inputArr = []
            }
            else
            {
                if(dot.includes(inputArr[inputArr.length-1]) && dot.includes(inputArr[inputArr.length-2])){
                    string = (string.substring(0,string.length-1)).concat(inputArr[inputArr.length-1]);
            input.value = string;
                }
                else{
                    string += e.target.innerHTML;
                console.log(string);
                input.value = string;
                }
            }
        }
    })
})
