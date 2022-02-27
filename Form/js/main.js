var subjectObject ={
  "Selengor":{
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
  