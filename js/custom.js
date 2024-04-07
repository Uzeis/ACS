// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function animateCounter(element, target) {
    let count = 0;
    const speed = 100; // milliseconds
    const increment = Math.ceil(target / (1000 / speed)); // Divide target number by 1000 milliseconds and round up
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(timer);
        count = target;
      }
      element.textContent = count;
    }, speed);
  }
  
  // Get counter elements
  const schoolsCounter = document.getElementById('schoolsCounter');
  const consultancyCounter = document.getElementById('consultancyCounter');
  const studentsCounter = document.getElementById('studentsCounter');
  
  // Define target values
  const schoolsTarget = 30;
  const consultancyTarget = 40;
  const studentsTarget = 1000;
  
  // Animate counters
  animateCounter(schoolsCounter, schoolsTarget);
  animateCounter(consultancyCounter, consultancyTarget);
  animateCounter(studentsCounter, studentsTarget);
  

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}