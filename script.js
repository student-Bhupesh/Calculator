// let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else{
//         string += e.target.innerHTML
//         input.value = string;
//         }
//     })
// })

let string="";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value = string; 
        }

        else if(e.target.innerHTML== "DEL"){
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string; 
        }

        // console.log(e.target)
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string; 
        let inputb = document.getElementById('inputBox');
        inputb.style.color = 'White';
        }
    })
})