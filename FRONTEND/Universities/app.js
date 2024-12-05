let url ="http://universities.hipolabs.com/search?country="


let buttons =document.querySelector("button");
buttons.addEventListener("click", async()=>{
    let country= document.querySelector("input").value;
    console.log(country)
   let colArr= await  getCountry(country);
   console.log(colArr);
   showUniversities(colArr)
   
    
})
function showUniversities(colArr){
    
    for( university of colArr){
        console.log(university.name);
        let colName=document.createElement("h4");
        colName.innerText=""
        colName.innerHTML=`  <div class="single-college">  Name:  <b>${university.name}}</b>
        </br>
        <h2>alpha_two_code: ${university.alpha_two_code}
        
        </h2>
        </br>
        <h3 class="links"><a href="${university.web_pages[0]}"</a>links :${ university.web_pages[0] } </h3>
        </div>`
      let parentelem=  document.querySelector(".card")
      parentelem.appendChild(colName)        
console.log(university.alpha_two_code);


console.log(university.web_pages[0])
    }

}




async function getCountry(country) {
    try {
        let res  =  await fetch(url + country);
        let data =  await res.json();
        console.log(data)
    
        return data
        
    } catch (error) {
        return []
        
    }
    
}
