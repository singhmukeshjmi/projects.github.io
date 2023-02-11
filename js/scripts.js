
window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



/*fetch('https://script.google.com/macros/s/AKfycbxuRSLRxLpKGyb2_n-uBT7JxRUxSPHntIoHIoikCUyi8htCfT1CEyTmb6nLMWtvZcRH4g/exec?limit=6')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.data[0]["Indexing"]);
    console.log(data.data[0]["Project Id"]);
    console.log(data.data[0]["Project Branch"]);
    console.log(data.data[0]["Category icon"]);
    console.log(data.data[0]["Project Category"]);
    console.log(data.data[0]["Project Name"]);
    console.log(data.data[0]["Project Title"]);
    console.log(data.data[0]["Project Content"]);
    console.log(data.data[0]["Project source image"]);
    for (let i = 0; i < 6; i++) {
        id = i+1
        id = "portfolioModal"+id
        port6 = document.getElementById(id)
        heading2 = port6.getElementsByTagName('h2')[0].outerText
        port6.getElementsByTagName('h2')[0].outerText = data.data[i]["Project Name"]
        imgsrc = port6.getElementsByTagName('img')[0].attributes.src
        port6.getElementsByTagName('img')[0].src = data.data[i]["Project source image"]
        contentdata = port6.getElementsByTagName('p')[0].innerHTML
        port6.getElementsByTagName('p')[0].innerHTML = data.data[i]["Project Content"]
        console.log("Done for"+id)
    }
  });*/


/*  id = "portfolioModal6"
  port6 = document.getElementById(id)
  port6.getElementsByTagName('h2')[0].outerText
  port6.getElementsByTagName('img')[0].attributes.src
  port6.getElementsByTagName('p')[0].innerHTML*/

//  <script>
        var i = 0;
        var txt = "Software Tester - Data Science Learner - Mathematics SME"; /* The text */
        var speed = 80; /* The speed/duration of the effect in milliseconds */
        var txtlen = txt.length;
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("capt").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
//    </script>

a = `<div class="portfolio-modal modal fade" id="portfolioBlog1" tabindex="-1" aria-labelledby="portfolioBlog1"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                        aria-label="Close"></button></div>
                <div class="modal-body text-center pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">portfolioTitle</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image-->
                                <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-4">{{{portfolioContent}}}
                                </p>
                                <button class="btn btn-primary" data-bs-dismiss="modal">
                                    <i class="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
//{{{portfolioImageSource}}}
//{{{portfolioTitle}}}
//{{{portfolioModal}}}


/*const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
e.preventDefault();
        const formData = new FormData(form);
        console.log(formData)
        fetch("https://script.google.com/macros/s/{scriptId}/exec", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            console.log(response);
            return response.text();
          })
          .then((data) => {
            console.log(data);
            alert("Form submitted successfully");
          })
          .catch((error) => {
            console.error(error);
            alert("Failed to submit form");
          });
      });*/

