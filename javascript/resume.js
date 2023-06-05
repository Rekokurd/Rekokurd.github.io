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

(function() {
  emailjs.init("IKYmqgdPB80BecU28"); // Replace with your EmailJS user ID

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Send the form data via EmailJS
    emailjs.send("service_wkg7o9m", "template_f74zkcy", formData)
      .then(function(response) {
        document.getElementById('response').innerHTML = "your message snet!";
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        document.getElementById('response').innerHTML = "Error occurred while submitting the form.";
        console.log('FAILED...', error);
      });
  });
})();