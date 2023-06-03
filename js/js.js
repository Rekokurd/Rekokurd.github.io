function downloadPDF() {
    let link = document.createElement('a');
    link.href = '/pdf/REKAN.pdf';
    link.download = 'REKAN.pdf';
    link.click();
  }
