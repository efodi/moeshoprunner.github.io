(function (MicroModal) {

  document.addEventListener('DOMContentLoaded', function() {
    MicroModal.init();

    var $modalButton = document.getElementById('show-modal');
    var iframe = document.querySelector('.modal iframe');
    var modalOpen = false;
    var $closeButton;

    $modalButton.addEventListener('click', function(event) {
      modalOpen = true;
      $closeButton = document.querySelector('.modal__close')
      setTimeout(function() {
        iframe.contentWindow.focus();
      }, 2000);
      
    });

    document.addEventListener('focusin', function(event) {
      if(modalOpen && event.target === $modalButton) {
        console.log(event.target, ' is the focused in element');
        $closeButton.focus();
      }
    });

    document.addEventListener('focusout', function(event) {
      if(modalOpen && event.target === $modalButton) {
        console.log(event.target, ' is the focused out element');
        $closeButton.focus();
      }
    });
  });

})(MicroModal);