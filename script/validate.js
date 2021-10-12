document.addEventListener('DOMContentLoaded', function() {
  "use string"
  
  const form = document.querySelector('#form');

  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    
    if(error === 0) {
      formSend();
    }
  };

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for(let i = 0; i < formReq.length; i++) {
      const input = formReq[i];

      formRemoveError(input);

      if(input.value === '') {
        formAddError(input);
        error++;
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
});
