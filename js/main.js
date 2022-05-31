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
