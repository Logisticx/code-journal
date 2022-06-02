var photoUrl = document.querySelector('#photo-url');
photoUrl.addEventListener('input', photoFunction);

function photoFunction(event) {
  var imageInput = document.querySelector('#photo-url').value;
  document.querySelector('.image').src = imageInput;
}

var noEntriesview = document.querySelector('.no-entries');
var dataValue = document.querySelectorAll('[data-view]');
var activeView = document.querySelectorAll('.view');
var hiddenView = document.querySelectorAll('.hidden');

for (var i = 0; i <= dataValue.length; i++) {
  if (localStorage.getItem('view') === 'entries') {
    data.view = localStorage.getItem('view');
    activeView[0].className = 'hidden';
    hiddenView[0].className = 'view';
  }
}

var entrySwitch = document.querySelector('.entries-button');
entrySwitch.addEventListener('click', viewSwitchFunction);

function viewSwitchFunction(event) {
  for (var i = 0; i <= dataValue.length; i++) {
    if (dataValue[i] === activeView[i]) {
      activeView[i].className = 'hidden';
      activeView[i].setAttribute('data-view', 'entries');
      data.view = 'entries';
      localStorage.setItem('view', data.view);
    } else {
      hiddenView[0].className = 'view';
      hiddenView[0].setAttribute('data-view', 'entry-form');
    }
  }
}

var entriesSwitch = document.querySelector('.new-button');
entriesSwitch.addEventListener('click', viewSwitchFunctionTwo);

function viewSwitchFunctionTwo(event) {
  for (var i = 0; i <= dataValue.length; i++) {
    if (dataValue[i] !== activeView) {
      activeView[i].className = 'view';
      hiddenView[i].className = 'view hidden';
      activeView[i].setAttribute('data-view', 'entry-form');
      hiddenView[i].setAttribute('data-view', 'entries');
      data.view = 'entry-form';
      localStorage.setItem('view', data.view);
    }
  }
}

var submitSwitch = document.querySelector('.submit');
submitSwitch.addEventListener('click', viewSwitchFunctionThree);

function viewSwitchFunctionThree(event) {
  for (var i = 0; i <= dataValue.length; i++) {
    if (dataValue[i] !== activeView) {
      activeView[i].className = 'view hidden';
      hiddenView[i].className = 'view';
      activeView[i].setAttribute('data-view', 'entries');
      hiddenView[i].setAttribute('data-view', 'entry-form');
      data.view = 'entries';
      localStorage.setItem('view', data.view);
    }
  }
}

function createEntryElement(object) {
  var openingLi = document.createElement('li');
  var rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  openingLi.appendChild(rowDiv);
  var columnHalfDiv = document.createElement('div');
  columnHalfDiv.className = 'column-half';
  rowDiv.appendChild(columnHalfDiv);
  var divImg = document.createElement('div');
  divImg.className = 'img';
  columnHalfDiv.appendChild(divImg);
  var newImage = document.createElement('img');
  newImage.className = 'image';
  newImage.src = (object.img);
  divImg.appendChild(newImage);
  var columnHalfDivTwo = document.createElement('div');
  columnHalfDivTwo.className = 'column-half';
  rowDiv.appendChild(columnHalfDivTwo);
  var entriesDiv = document.createElement('div');
  entriesDiv.className = 'entries-text';
  columnHalfDivTwo.appendChild(entriesDiv);
  var hTwo = document.createElement('h2');
  hTwo.textContent = (object.title);
  entriesDiv.appendChild(hTwo);
  var pText = document.createElement('p');
  pText.textContent = (object.notes);
  entriesDiv.appendChild(pText);
  noEntriesview.className = 'hidden';
  return openingLi;

}
var domContent = document.querySelector('.list');
function loadEntries() {
  domContent.innerHTML = '';
  for (var i = 0; i < data.entries.length; i++) {
    var dataEntries = createEntryElement(data.entries[i]);
    domContent.appendChild(dataEntries);
  }
}
document.addEventListener('DOMContentLoaded', loadEntries);
var journalEntry = document.querySelector('form');
journalEntry.addEventListener('submit', submitEvent);

function prependEntry(entry) {
  var entryElement = createEntryElement(entry);
  domContent.prepend(entryElement);
}

function submitEvent(event) {
  var newObj = {};
  newObj.title = document.querySelector('#title-name').value;
  newObj.img = document.querySelector('#photo-url').value;
  newObj.notes = document.querySelector('#notes').value;
  newObj.currentEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newObj);
  event.preventDefault();
  document.querySelector('.image').src = 'images/placeholder-image-square.jpg';
  document.querySelector('form').reset();
  prependEntry(newObj);
}
