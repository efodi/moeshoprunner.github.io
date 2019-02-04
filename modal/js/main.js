(function (MicroModal) {

  document.addEventListener('DOMContentLoaded', function() {
    MicroModal.init();

    var $modalButton = document.getElementById('show-modal');
    var iframe = document.getElementById('sr-modal');
    var modalOpen = false;
    var $closeButton;

    $modalButton.addEventListener('click', function(event) {
      modalOpen = true;
      $closeButton = document.querySelector('.modal__close');

      setTimeout(function() {
          console.log('test');
          document.getElementById('sr-modal').focus();
          console.log(document.activeElement, 'is the currently active element');
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