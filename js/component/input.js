/**
 * Input box used to type a message.
 */
component.input = function() {
  component.apply(this, arguments);
};
assessment.extend(component.input, component);

/**
 * Draw the input area, the button, and attach an event listener to the button
 * for sending messages.
 *
 * @param {HTMLDivElement} parent
 */
component.input.prototype.decorate = function(parent) {
  var container = document.createElement('div');
  container.className = 'input_container';
  parent.appendChild(container);

  var text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.className = 'input_text';
  container.appendChild(text);

  /**
   * TODO 1
   *
   * Clicking "send" every time is annoying. Add something here that will send
   * a message when you press <enter>.
   */


  var button = document.createElement('div');
  button.className = 'input_button';
  button.innerHTML = 'Send';
  container.appendChild(button);

  button.addEventListener('click', function() {
    assessment.api(
      'message',
      'create',
      {
        'name': localStorage.name,
        'message': text.value
      },
      function(response) {
        /**
         * TODO 2
         *
         * When you get a successful response back from the API you will need
         * to display your message. Do not directly manipulate the DOM in this
         * function.
         *
         * Two possible ways to do this:
         *
         * 1. Dispatch an event or directly call a function inside the content
         * component that will append a new message.
         *
         * 2. Add the message you get back from the API to a static list of
         * messages stored locally in JS, then re-render the content
         * component. You will need to change the render function in this case
         * to read these messages.
         */
        console.log('Do something with this response...');
        console.log(response);

        text.value = '';
        text.focus();
      });
  });

  /**
   * TODO 1
   * Here is my solution to TODO 1; It's simple, because the code for posting messages will always be in one place in the code.
   * So if changes are ever needed, all we need to do is look in the only code segment that handles it.
   */
  document.addEventListener('keyup',function (e){
    if (e.keyCode == 13) {
      console.log("Enter Key pressed");
    button.click();
    }
  } );
}
