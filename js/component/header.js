/**
 * Application header.
 */
component.header = function() {
  component.apply(this, arguments);
};
assessment.extend(component.header, component);

/**
 * Draw the header.
 *
 * @param {HTMLDivElement} parent
 */
component.header.prototype.decorate = function(parent) {
  var header = document.createElement('h1');
  header.className = 'header';
  header.innerHTML = 'ORS Assessment - Chat as ' + localStorage.name;
  parent.appendChild(header);
}
