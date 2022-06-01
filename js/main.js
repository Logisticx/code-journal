var photoUrl = document.querySelector('#photo-url');
photoUrl.addEventListener('input', photoFunction);

function photoFunction(event) {
  var imageInput = document.querySelector('#photo-url').value;
  document.querySelector('.image').src = imageInput;
}

var journalEntry = document.querySelector('form');
journalEntry.addEventListener('submit', submitEvent);

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
}

function domTree(object) {
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

  return openingLi;

}
var domContent = document.querySelector('.list');
document.addEventListener('DOMContentLoaded', domTree);
for (var i = 0; i < data.entries.length; i++) {
  var dataEntries = domTree(data.entries[i]);

  domContent.appendChild(dataEntries);

}
/*
var entrySwitch = document.querySelector('.entries-button');
entrySwitch.addEventListener('click', viewSwitchFunction);

var divClassName = document.querySelector('.active');
var divClassNametwo = document.querySelector('.hidden');

function viewSwitchFunction(event) {

  divClassNametwo.className = 'active';
  divClassName.className = 'hidden';

}

var entriesSwitch = document.querySelector('.new-button');
entriesSwitch.addEventListener('click', viewSwitchFunctionTwo);

function viewSwitchFunctionTwo(event) {

  divClassName.className = 'active';
  divClassNametwo.className = 'hidden';

}

var submitSwitch = document.querySelector('.submit');
submitSwitch.addEventListener('click', viewSwitchFunctionThree);

function viewSwitchFunctionThree(event) {
  divClassName.className = 'hidden';
  divClassNametwo.className = 'active';
}
*/
