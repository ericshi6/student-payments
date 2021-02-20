var testCards = {
    'Amex': 371111111111114,
    'Diners': 3001111111111116,
    'Discover':	6011111111111117,
    'JCB':	35281111111111119,
    'Maestro':	56410411111111113,
    'Mastercard (Credit)':	5411111111111115,
    'Mastercard (Debit)':	5511111111111114,
    'Visa (Credit)':	4532111111111112,
    'Visa (Debit)':	4751271111111118
};
console.log(testCards);

var dropdown = document.getElementById("dropdown"); 
var options = ["Tuition/fees (AUA distinct from AICASA)", "Housing", "Utilities", "Comp exam payments", "Transcripts", "Temp bus passes or full semester bus service", "Parking permits", "Diplomas (small and large formats)", "Cap&Gown fees", "Other",];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropdown.appendChild(el);
};

//var currentTab = 0; // Current tab is set to be the first tab (0)
//var maxTab = 2;
$(document).ready(function(){
    //stepIndicator(currentTab);
    //$('#prevBtn').hide();
    
    $('#toggleTable').click(function(){
      $('#testCardTable').toggle();
    });


    //showTab(currentTab); // Display the current tab
/*     $('#nextBtn').on('click', ()=>{
        if (currentTab < maxTab) {
            currentTab++;
            $('#prevBtn').show();
        } 
        if (currentTab == maxTab){
          $('#nextBtn').hide();
        }
        stepIndicator(currentTab);

    });
    $('#prevBtn').on('click', ()=>{
        if (currentTab > 0) {
            currentTab--;
            $('#nextBtn').show();
        }
        if (currentTab == 0){
          $('#prevBtn').hide();
        }
        stepIndicator(currentTab);

    });

    function stepIndicator(n) {
        $('.tab').removeClass('active');
        $('.tab'+n).addClass('active');
        $('.step').removeClass('active');
        $('.step'+n).addClass('active');
        
    } */

  });

/*
  
  function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").style.display = "none";
      //change id
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
  }
  
  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
      //...the form gets submitted:
      document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }
  
  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }


  //NMI
  */