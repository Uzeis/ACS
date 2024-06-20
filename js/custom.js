// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();
var originalContent = {}; // Object to store original content of each element

function translatePage() {
  var slider = document.getElementById('languageToggle');
  
  if (slider.checked) {
    translateElements(document.body, 'en', 'ja'); // Translate entire document to Japanese
  } else {
    translateElements(document.body, 'ja', 'en'); // Translate entire document back to English
  }
}

function translateElements(element, sourceLang, targetLang) {
  // Traverse through each child node of the element
  for (var i = 0; i < element.childNodes.length; i++) {
    var node = element.childNodes[i];

    // Check if it's a text node and translate its content
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      var originalText = node.textContent.trim();
      if (!originalContent[node]) {
        originalContent[node] = originalText; // Store original text if not already stored
      }

      // Translate text content
      translateText(originalText, sourceLang, targetLang, function(translatedText) {
        node.textContent = translatedText;
      });
    }

    // Recursively translate child elements if there are any
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
      translateElements(node, sourceLang, targetLang); // Exclude script and style elements
    }
  }
}

function translateText(text, sourceLang, targetLang, callback) {
  var xhr = new XMLHttpRequest();
  var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sourceLang + '&tl=' + targetLang + '&dt=t&q=' + encodeURIComponent(text);

  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var translatedText = response[0][0][0]; // Extract translated text
      callback(translatedText);
    }
  };
  xhr.send();
}


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