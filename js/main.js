var photoUrl = document.querySelector('#photo-url');
photoUrl.addEventListener('input', photoFunction);

function photoFunction(event) {
  var imageInput = document.querySelector('#photo-url').value;
  document.querySelector('.image').src = imageInput;
}

function prependEntry(entry) {
  var entryElement = createEntryElement(entry);
  domContent.prepend(entryElement);
}

function submitEvent(event) {
  event.preventDefault();
  var newObj = {};
  newObj.title = document.querySelector('#title-name').value;
  newObj.img = document.querySelector('#photo-url').value;
  newObj.notes = document.querySelector('#notes').value;
  newObj.currentEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newObj);
  document.querySelector('.image').src = 'images/placeholder-image-square.jpg';
  document.querySelector('form').reset();
  prependEntry(newObj);
}

var activeView = document.querySelectorAll('.view');
var hiddenView = document.querySelectorAll('.hidden');
var noEntriesview = document.querySelector('.no-entries');
var entryToEntriesButton = document.querySelector('.entries-button');
var renderedEntriesList = document.querySelector('.list');
renderedEntriesList.addEventListener('click', renderedEntriesClickFunction);

function renderedEntriesClickFunction(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var parsed = parseInt(event.target.getAttribute('data-entry-id'));
    if (parsed === data.entries[i].currentEntryId) {
      data.view = 'entry-form';
      viewSwitch();
      data.editing = data.entries[i].currentEntryId;
      // console.log(data.entries[i]);
      // console.log(event.target);
      /*  Pre-populate the entry form with the clicked entry's
     values from the object found in the data model. */
      document.querySelector('#title-name').value = data.entries[i].title;
      document.querySelector('#photo-url').value = data.entries[i].img;
      document.querySelector('.image').src = data.entries[i].img;
      document.querySelector('#notes').value = data.entries[i].notes;
      console.log(document.querySelector('#title-name'));
      console.log(document.querySelector('img'));
      console.log(document.querySelector('#notes'));

      /* button on line 127 is not lining up with the currentEntryID. div value changes on page load */
      if (event.target.className === 'save-button') {
        /* remove dom tree and re append  updated dom tree */
        submitEvent();
      }
    }
  }

}

entryToEntriesButton.addEventListener('click', function (event) {
  data.view = 'entries';
  viewSwitch();
});

var saveToEntriesButton = document.querySelector('.save-button');
saveToEntriesButton.addEventListener('click', function (event) {
  data.view = 'entries';
  viewSwitch();
});

var entriesToNewEntry = document.querySelector('.new-button');
entriesToNewEntry.addEventListener('click', function (event) {
  data.view = 'entry-form';
  viewSwitch();
  document.querySelector('.image').src = 'images/placeholder-image-square.jpg';
  document.querySelector('form').reset();
});

function viewSwitch(string) {
  if (data.view === 'entry-form' || string === 'entry-form') {
    activeView[0].className = 'view';
    hiddenView[0].className = 'view hidden';
  } else if (data.view === 'entries' || string === 'entries') {
    activeView[0].className = 'view hidden';
    hiddenView[0].className = 'view';
  }
}

var dataEntryId = 1;
function createEntryElement(object) {
  var openingLi = document.createElement('li');
  openingLi.setAttribute('data-entry-id', dataEntryId);
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
  var editIcon = document.createElement('i');
  editIcon.className = 'fa fa-pencil icon';
  editIcon.setAttribute('data-entry-id', dataEntryId);
  dataEntryId++;
  entriesDiv.appendChild(editIcon);
  entriesDiv.appendChild(hTwo);
  var pText = document.createElement('p');
  pText.textContent = (object.notes);
  entriesDiv.appendChild(pText);
  noEntriesview.className = 'hidden';
  return openingLi;
}

document.addEventListener('DOMContentLoaded', loadEntries);
var journalEntry = document.querySelector('form');
journalEntry.addEventListener('submit', submitEvent);

var domContent = document.querySelector('.list');
function loadEntries() {
  domContent.innerHTML = '';
  for (var i = 0; i < data.entries.length; i++) {
    var dataEntries = createEntryElement(data.entries[i]);
    domContent.appendChild(dataEntries);
    viewSwitch(data.view);
  }
}
