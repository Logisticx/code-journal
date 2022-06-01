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

var dataValue = document.querySelectorAll('[data-view]');
var activeView = document.querySelectorAll('.view');
var hiddenView = document.querySelectorAll('.hidden');

var entrySwitch = document.querySelector('.entries-button');
entrySwitch.addEventListener('click', viewSwitchFunction);

function viewSwitchFunction(event) {
  for (var i = 0; i <= dataValue.length; i++) {
    if (dataValue[i] !== activeView) {
      activeView[i].className = 'hidden';
      hiddenView[i].className = 'view';
      activeView[i].setAttribute('data-view', 'entries');
      hiddenView[i].setAttribute('data-view', 'entry-form');

    }
  }
}

var entriesSwitch = document.querySelector('.new-button');
entriesSwitch.addEventListener('click', viewSwitchFunctionTwo);

function viewSwitchFunctionTwo(event) {
  for (var i = 0; i <= dataValue.length; i++) {
    if (dataValue[i] !== activeView) {
      activeView[i].className = 'view';
      hiddenView[i].className = 'hidden';
      activeView[i].setAttribute('data-view', 'entry-form');
      hiddenView[i].setAttribute('data-view', 'entries');

    }
  }
}

var submitSwitch = document.querySelector('.submit');
submitSwitch.addEventListener('click', viewSwitchFunctionThree);

function viewSwitchFunctionThree(event) {
  for (var i = 0; i <= dataValue.length; i++) {
    if (dataValue[i] !== activeView) {
      activeView[i].className = 'hidden';
      hiddenView[i].className = 'view';
      activeView[i].setAttribute('data-view', 'entries');
      hiddenView[i].setAttribute('data-view', 'entry-form');

    }
  }
}
