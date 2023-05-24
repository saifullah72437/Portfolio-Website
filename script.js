document.getElementById('resume').addEventListener('click', function() {
    var fileUrl = 'files/cv.pdf';  // Replace with the URL of your CV file
    var fileName = 'cv.pdf';  // Replace with the desired filename
    
    downloadFile(fileUrl, fileName);
  });
  document.getElementById('visitGit').addEventListener('click', function() {
    window.location.href = 'https://github.com/saifullah72437'; // Replace with your GitHub profile URL
  });
  function downloadFile(fileUrl, fileName) {
    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  