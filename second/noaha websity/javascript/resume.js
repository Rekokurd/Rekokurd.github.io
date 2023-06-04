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

const input = document.getElementsByClassName('input');
input.addEventListener('focus', function() {
  this.removeAttribute('placeholder');
});
input.addEventListener('blur', function() {
  this.setAttribute('placeholder', 'Enter your text');
});

// newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
emailjs.init("IKYmqgdPB80BecU28");

function sendEmail() {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the input values
    var name = document.getElementById('nameinput').value;
    var email = document.getElementById('emailinput').value;
    var message = document.getElementById('messageinput').value;

    // Send the email using EmailJS
    emailjs.send("service_wkg7o9m", "template_f74zkcy", {
        to_email: email,
        from_name: name,
        message: message
    })
    .then(function(response) {
        console.log('Email sent successfully', response);
        // You can add a success message or any other desired action here
    }, function(error) {
        console.error('Email sending failed', error);
        // You can add an error message or any other desired action here
    });
}

