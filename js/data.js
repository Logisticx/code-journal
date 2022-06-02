/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', windowString);
function windowString(event) {
  var entriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', entriesJSON);

}

var previousentriesJSON = localStorage.getItem('javascript-local-storage');
if (previousentriesJSON !== null) {
  data.entries = JSON.parse(previousentriesJSON);
}
