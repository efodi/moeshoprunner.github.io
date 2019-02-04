(function () {

  document.addEventListener('DOMContentLoaded', function() {

    var $modalButton = document.getElementById('show-modal');
    var modalOpen = false;
    // var $closeButton;

    $modalButton.addEventListener('click', function(event) {
      modalOpen = true;
      // show
      document.querySelector('.sr-modal__overlay').classList.add('sr-modal__overlay--show');



      setTimeout(function() {
          console.log('test');
          // $closeButton = document.querySelector('.sr-modal__close-button');
          document.getElementById('sr-modal').focus();
          console.log(document.activeElement, 'is the currently active element');
      }, 0);
    });

    

    // document.addEventListener('focusin', function(event) {
    //   if(modalOpen && event.target === $modalButton) {
    //     console.log(event.target, ' is the focused in element');
    //     $closeButton.focus();
    //   }
    // });

    // document.addEventListener('focusout', function(event) {
    //   if(modalOpen && event.target === $modalButton) {
    //     console.log(event.target, ' is the focused out element');
    //     $closeButton.focus();
    //   }
    // });
  });

})();