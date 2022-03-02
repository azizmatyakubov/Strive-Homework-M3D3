const API_KEY = '563492ad6f9170000100000101721bd9fedd4817b2ed585ad4ebc93a'
const URL = 'https://api.pexels.com/v1/search?query=[your-query]'


// working 
fetch(URL, { headers: { Authorization: API_KEY }})
    .then(response=>response.json())
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })

//EXERCISE 1 
    function loadImages() {

       
        const row = document.querySelector(".row")

        row.innerHTML =
       photo.map (photo=> `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
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
      </div>`)
    }



    //EXERCISE 3
    //The Edit button should be replaced with a "Hide" button. 

    
let buttonHide = document.querySelectorAll ('hide')

for (let buttonHides of buttonHide) {
    buttonHide.innerHTML="Hide"
}
   


    const targetDiv = document.getElementById("column-disappear");
const hideButton= document.getElementById("toggle");
hideButton.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};


//Exercise 5
//Replace the "9 mins" string in the card template with the ID of the Image

let newImage= document.getElementsByTagName('btn-group.small')

newImage.innerText= "ID"