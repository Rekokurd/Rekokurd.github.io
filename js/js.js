function downloadPDF() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    var fileUrl = 'path/to/your/file.pdf';
  
    // Create an anchor element
    var a = document.createElement('a');
    
    // Set the href attribute of the anchor element to the PDF file URL
    a.href = fileUrl;
    
    // Set the 'download' attribute to specify the filename
    a.download = '/pdf/REKAN.pfd';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  document.getElementById('resume_link').addEventListener('click', downloadPDF);
