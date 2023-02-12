let pretf = document.querySelector(".rwoo");

function prrodekt(dsfnall = []) {
    let dsf = JSON.parse(localStorage.getItem("ali")) || dsfnall;
    let predgy = dsf.map((res) => {
        return `
     
              
        
            <tr>
              <td><a onclick="removcard(${res.id})" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg></a></td>
                <td><img src=${res.img} alt=""></td>


                <td><h5>${res.titrl}</h5></td>


                <td> <p>${res.pris} <del>${res.ded}</del></p></td>

              

                <td> <input class="w-25 pl-1" value="1"  type="number"</td>

                <td>200</td>

            </tr>
   ` 
    });
    pretf.innerHTML = predgy;
}
prrodekt();

function removcard(id) {
    let productsIncart = localStorage.getItem("ali");
    if (productsIncart) {
        let items = JSON.parse(productsIncart);
        let filft = items.filter((res) => res.id !== id);
        prrodekt(filft);
        localStorage.setItem("ali", JSON.stringify(filft));
    }
}

let shopicon=document.querySelector('.shop-icon')
let bropekt=document.querySelector('.shopp-menu ')
let bropekgt=document.querySelector('.shopp-menu div ')

let bropektf=document.querySelector('.badeg')

shopicon.addEventListener('click' , openmenuo )
function openmenuo(){
    if(bropekt.style.display=="block"){
     bropekt.style.display="none";
    }else{
     bropekt.style.display="block";
    }
 }