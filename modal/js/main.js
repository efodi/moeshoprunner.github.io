(function (MicroModal) {

  document.addEventListener('DOMContentLoaded', function() {
    MicroModal.init();

    var $modalButton = document.getElementById('show-modal');

    $modalButton.addEventListener('click', function(event) {
      var iframe = document.querySelector('.modal iframe');
      iframe.contentWindow.focus();
    });
  });

})(MicroModal);