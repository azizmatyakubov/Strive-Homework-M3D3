const API_KEY = '563492ad6f9170000100000101721bd9fedd4817b2ed585ad4ebc93a'

const URL = 'https://api.pexels.com/v1/search?query=people'

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



const loadSecondary = () => {


// working 
fetch(URL, { headers: { Authorization: API_KEY }})
    .then(response=>response.json())

    .then(result=> {


          displayCards(result.photos)
    })
    .catch(err=>{
        console.log(err)
    })


}

