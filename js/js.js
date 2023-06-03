function downloadPDF() {
    let link = document.createElement('a');
    link.href = '/pdf/REKAN.pdf';
    link.download = 'REKAN.pdf';
    link.click();
  }
function dfunction() {
  document.getElementById("languages").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}