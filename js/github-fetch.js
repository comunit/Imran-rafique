let projectHtml = document.querySelector('.projects');
let url = 'https://api.github.com/users/comunit/repos?sort=created';

fetch(url)
 .then((res) => res.json())
 .then((data) => {
  let output = '';
  let description;
   data.forEach(data => {
     if(data.description == null) {
       description = 'Click to see complete code'
     } else {
       description = data.description
     }
     output += `
     <a href="${data.html_url}" target="_blank">
     <div class="item">
       <div class="inner-item">
         <h3>${data.name}</h3>
         <p>${description}</p>
         <br> ${data.language}
       </div>
     </div>
   </a>
     `;
     projectHtml.innerHTML = output;
   });
 })

