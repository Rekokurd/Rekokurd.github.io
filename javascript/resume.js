function downloadPDF() {
  let link = document.createElement('a');
  link.href = '/pdf/REKAN.pdf';
  link.download = 'REKAN.pdf';
  link.click();
}
function downloadPDF() {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
   
    window.open('/pdf/REKAN.pdf', '_blank');
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    
    window.open('/pdf/REKAN.pdf');
  } else {
    
    let link = document.createElement('a');
    link.href = '/pdf/REKAN.pdf';
    link.download = 'REKAN.pdf';
    link.click();
  }
}

(function() {
  emailjs.init("IKYmqgdPB80BecU28"); // EmailJS user ID

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    emailjs.send("service_wkg7o9m", "template_f74zkcy", formData)
      .then(function(response) {
        document.getElementById('response').innerHTML = "your message snet!";
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        document.getElementById('response').innerHTML = "Error occurred while submitting the message.";
        console.log('FAILED...', error);
      });
  });
})();