window.onload = () => {

let input = window.prompt('enter a number:');

input = parseInt(input, 10)

let diamond = document.querySelector('div');

//this would to create the odd diamonds.
let oddNum=(size)=>
{
    let input= ``;
//this would create the top layers of the diamond.
    for(let l=1; l<=size; l+=2)
    {
        let tempInput = ``;
        for(let d=0; d<l; d++)
        {
        tempInput += `<br>`;
        input += tempInput;
        }
    }
//this would create the bottom layers if the odd diamond.
    for(let l=size-2; l>0; l-=2)
    {
        let tempInput = ``;
        for(let d=0; d<l; d++)
        {
            tempInput+=`<br>`;
            input+=tempInput;
        }

        diamond.innerHTML = input;
    }
};

//This would create the even diamonds.
    let evenNum=(size)=>
    {
        let input=`*`;

//This is the same as the above fuction
        for(let l=0; l<=size+1; l+=2)
        {
            let tempInput=``;
            for(let d=0; d<l; d++)
            {
                tempInput+=`<br>`;
                input+=tempInput;
            }
        }
        for(let l=size-2; l>0; l-=2)
        {
            let tempInput = ``;
            for(let d=0; d<l; d++)
            {
                tempInput+=`<br>`;
                input+=tempInput;
            }
                diamond.innerHTML=input+`*`;
        }
    };

    if(input%2===0)
        evenNum(input);
    else
        oddNum(input);
//This would create the move fucntion for the diamond.
let move = () =>
{
    if (left < (body.clientWidth - diamond.clientWidth +6) && right === 0)
        diamond.style.left = left+`px`;
        left += 1;
         if (left === (body.clientWidth - diamond.clientWidth + 6))
         {
             right = 1;
         }
}
    if (left > 0 && right === 1)
    {
         diamond.style.left = left+`px`;
         left -= 1;
         if (left === 0)
         {
             right = 0;
         }
     }
 };
