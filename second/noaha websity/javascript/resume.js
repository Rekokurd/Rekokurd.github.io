function downloadPDF() {
  let link = document.createElement('a');
  link.href = '/pdf/REKAN.pdf';
  link.download = 'REKAN.pdf';
  link.click();
}
function downloadPDF() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // For Android devices, open the PDF in a new tab
    window.open('/pdf/REKAN.pdf', '_blank');
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // For iOS devices, open the PDF in a new window
    window.open('/pdf/REKAN.pdf');
  } else {
    // For other devices, initiate the direct download
    var link = document.createElement('a');
    link.href = '/pdf/REKAN.pdf';
    link.download = 'REKAN.pdf';
    link.click();
  }
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
const input = document.getElementById('myInput');
input.addEventListener('focus', function() {
this.removeAttribute('placeholder');
});
input.addEventListener('blur', function() {
this.setAttribute('placeholder', 'Enter your text');
});