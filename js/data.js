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

var entrySwitch = document.querySelector('.entries-button');
entrySwitch.addEventListener('click', viewSwitchFunction);

var divClassName = document.querySelector('.active');
var divClassNametwo = document.querySelector('.hidden');

function viewSwitchFunction(event) {
  data.view = 'entries';
  divClassNametwo.className = 'active';
  divClassName.className = 'hidden';
}

var entriesSwitch = document.querySelector('.new-button');
entriesSwitch.addEventListener('click', viewSwitchFunctionTwo);

function viewSwitchFunctionTwo(event) {
  data.view = 'entries';
  divClassName.className = 'active';
  divClassNametwo.className = 'hidden';
}

var submitSwitch = document.querySelector('.submit');
submitSwitch.addEventListener('click', viewSwitchFunctionThree);

function viewSwitchFunctionThree(event) {
  data.view = 'entries';
  divClassName.className = 'hidden';
  divClassNametwo.className = 'active';
}
