var subjectObject ={
    "Selangor":{
       "Kuala Lumpur":{"Dr. Lee Wah Yeh": "appointment.my.leewahyeh@gmail.com"},
       "Petaling Jaya": {"Dr. Nicholas Tan": "appointment.my.nicholastan@gmail.com"}
   },
   "Negeri Sembilan":{
       "Nilai":{"Dr. Andrew Loo": "appointment.my.andrewloo@gmail.com"},
       "Seremban": {"Dr. Ng Yoke Lan ": "appointment.my.ngyokelan@gmail.com"}
   },
   "Perak":{
       "Ipoh":{"Dr. Lim Ming Kow ":"appointment.my.limmingkow@gmail.com"}
   }
               
  
  }
  
    window.onload = function() {
      var stateSel = document.getElementById("State");
      var citySel = document.getElementById("City");
      var doctorSel = document.getElementById("Doctor");
      for (var x in subjectObject) {
        stateSel.options[stateSel.options.length] = new Option(x, x);
      }
      stateSel.onchange = function() {
  
   citySel.length = 1;
   doctorSel.length = 1;
      
        for (var y in subjectObject[this.value]) {
          citySel.options[citySel.options.length] = new Option(y, y);
        }
      }
      citySel.onchange = function() {
  
    doctorSel.length = 1;
    for (var z in subjectObject[stateSel.value][this.value]) {
        doctorSel.options[doctorSel.options.length] = new Option(z, z);
      }
    }
  }

  function sendEmail(form) {
    var statesel = document.getElementById('State');
    var state = statesel.options[statesel.selectedIndex].text;
    var citysel = document.getElementById('City');
    var city = citysel.options[citysel.selectedIndex].text;
    var doctorsel = document.getElementById('Doctor');
    var doctor = doctorsel.options[doctorsel.selectedIndex].text;

    var email = subjectObject[state][city][doctor];
    var subject = document.getElementById('Subjectline').value;
    var enquiry = document.getElementById('Message').value;
    var sender = document.getElementById('Sender').value;
    var message = "Good day Dr,\nI am a resident in "+ city +", "+ state +". I am writing this email to make a medical enquiry: "+ enquiry + "\nI hope that you can answer my enquiries. Please inform me if a doctor appointment is neccessary.\nYours faithfully,\n" + sender;

    window.location.href = "mailto:"+email+"?subject="+subject+"&body="+ message;
  }