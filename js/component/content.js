/**
 * Content area that displays all sent and received messages.
 */
component.content = function() {
  component.apply(this, arguments);

  setInterval(this.get_new_messages, 1000);
};
assessment.extend(component.content, component);

/**
 * Draw all of the messages.
 *
 * @param {HTMLDivElement} parent
 */
component.content.prototype.decorate = function(parent) {
  var content = document.createElement('div');
  content.className = 'content';
  parent.appendChild(content);
};

/**
 * Check the server for new messages. When received, display them.
 */
component.content.prototype.get_new_messages = function() {
  assessment.api(
    'message',
    'read',
    {
      // Add arguments here as necessary.
    },
    function(response) {
      /**
       * TODO 3
       *
       * Fill in the stub for this function in the API then deal with the
       * response here. Be sure you provide enough data to the API so that
       * only *new* messages are transmitted back.
       */
      console.log('Do something with this response...');
      console.log(response);
    }
  )
}
