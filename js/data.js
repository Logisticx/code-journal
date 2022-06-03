/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', dataString);
function dataString(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);

}

var previousentriesJSON = localStorage.getItem('javascript-local-storage');
if (previousentriesJSON !== null) {
  data = JSON.parse(previousentriesJSON);
}
