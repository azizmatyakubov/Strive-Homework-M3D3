const API_KEY = '563492ad6f9170000100000101721bd9fedd4817b2ed585ad4ebc93a'
const URL = 'https://api.pexels.com/v1/search?query=people'


// working 
fetch(URL, { headers: { Authorization: API_KEY }})
    .then(response=>response.json())
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })

