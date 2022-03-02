const API_KEY = '563492ad6f9170000100000101721bd9fedd4817b2ed585ad4ebc93a'
const URL = 'https://api.pexels.com/v1/search?query=people'






//EXERCISE 1 
const displayCards = (pics) => {
    for(let i=0; i<pics.length; i++) {
      let code = `
       <div class="col-md-4">
       <div class="card mb-4 shadow-sm">
         <img src="${pics[i].src.medium}" alt="" srcset="">
         <div class="card-body">
           <p class="card-text">
             This is a wider card with supporting text below as a natural
             lead-in to additional content. This content is a little bit
             longer.
           </p>
           <div
             class="d-flex justify-content-between align-items-center"
           >
             <div class="btn-group">
               <button
                 type="button"
                 class="btn btn-sm btn-outline-secondary"
               >
                 View
               </button>
               <button
                 type="button"
                 class="btn btn-sm btn-outline-secondary"
               >
                 Edit
               </button>
             </div>
             <small class="text-muted">9 mins</small>
           </div>
         </div>
       </div>
     </div>
     `
    document.querySelector('.firstRow').innerHTML += code
    }
}



const loadSecondary = () => {}

// working 
fetch(URL, { headers: { Authorization: API_KEY }})
    .then(response=>response.json())
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })






    //EXERCISE 3
    //The Edit button should be replaced with a "Hide" button. 

    
let buttonHide = document.querySelectorAll ('hide')

for (let element of buttonHide) {
    buttonHide.innerHTML="Hide"
}
   




//Exercise 5
//Replace the "9 mins" string in the card template with the ID of the Image

//let newImage= document.getElementsByTagName('btn-group.small')
