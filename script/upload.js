// upload file
const uploadFile = document.querySelector('#upload-file');
const uploadBtn = document.querySelector('#upload-btn');
const uploadText = document.querySelector('.upload-text');

uploadBtn.addEventListener('click', function() {
  uploadFile.click();
});

uploadFile.addEventListener('change', function() {
  if(uploadFile.value) {
    uploadBtn.innerText = '';
    uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
  };
});
