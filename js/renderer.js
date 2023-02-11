/*myname = "Mukkaa"
document.getElementById('title name').innerHTML=myname
document.getElementById('navbar name').innerHTML=myname
document.getElementById('hero section name').innerHTML=myname
document.getElementById('copyright section name').innerHTML=`<small>Copyright &copy; ${myname}</small>`*/
index=1
projects_grid = `<!-- Portfolio Item ${index}-->
<div class="col-md-6 col-lg-4 mb-5">
    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${index}">
        <div
            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-expand fa-3x"></i><br>Open this project</div>
        </div>
        <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
    </div>
</div>
<!-- Portfolio Item ${index}-->
<div class="col-md-6 col-lg-4 mb-5">
    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${index}">
        <div
            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-expand fa-3x"></i><br>Open this project</div>
        </div>
        <img class="img-fluid" src="assets/img/portfolio/cake.png" alt="..." />
    </div>
</div>`

document.getElementById('projects_grid').innerHTML=document.getElementById('projects_grid').innerHTML.replace("{{{projects_grid}}}",projects_grid+projects_grid)




blogs_grid = `                <!-- Blog Item {{{index}}}-->
<div class="col-md-6 col-lg-4 mb-5">
    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#blogModal{{{index}}}">
        <div
            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-expand fa-3x"></i><br>Open this post</div>
        </div>
        <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
    </div>
</div>`
blogs_grid = blogs_grid.replaceAll("{{{index}}}",1)+blogs_grid.replaceAll("{{{index}}}",2)
document.getElementById('blogs_grid').innerHTML=document.getElementById('blogs_grid').innerHTML.replaceAll('{{{blogs_grid}}}',blogs_grid)


const elements = document.getElementsByClassName('fa-star');
let isFlipped = false;

function flipElements() {
  for (let element of elements) {
    element.style.transform = isFlipped ? 'scaleY(1)' : 'scaleY(-1)';
  }
  isFlipped = !isFlipped;
  setTimeout(flipElements, 250);
}

flipElements();

bod= {
    name: "name",
    email: "email",
    message: "message"}
console.log(bod)
url = "https://script.google.com/macros/s/AKfycbz5ZlhmmkS36SbXcqD9xPqfffHpCQRJ8DctyIPLsS3RvE9EZegiJOlTIOldgshS8j31/exec";
fetch(url, {
  mode: 'no-cors',
    method: "POST",
    body: JSON.stringify({"name":"gh","email":"ghbnm"}),
    headers: {'Accept-Encoding': 'gzip, deflate, br', 'Accept': '*/*', 'Connection': 'keep-alive',
      "Content-Type": "text/plain;charset=utf-8"
    },
  })    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));


/*var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var message = form.elements.message.value;

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});*/
