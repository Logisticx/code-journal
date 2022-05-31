var photoUrl = document.querySelector('#photo-url');
photoUrl.addEventListener('input', photoFunction);

function photoFunction(event) {
  var imageInput = document.querySelector('#photo-url').value;
  document.querySelector('.image').src = imageInput;
  return imageInput;
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

  document.querySelector('.image').reset();
  document.querySelector('#title-name').reset();
  document.querySelector('#notes').reset();
  data.entries.unshift(newObj);

  event.preventDefault();
}

window.addEventListener('beforeunload', windowString);
function windowString(event) {
  var entriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', entriesJSON);
}
