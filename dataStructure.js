var aDocument = {
  user:"alovelace",
  first:"Ada",
  last:"Lovelace",
  born: 1815
  alive: true
}
//complex, nested objects are maps!
var aMap = {
  name: {first:"Ada",last:"Lovelace"}
  born: 1815
}
//documents live in collections
//for example users collection contains users
var collection = {
  aDocument,
  aMap
}
//names of documents in a collection must be unique
//to refer to a document in a collection create a reference variable
var aDocumentRef = db.collection('users').doc('aDoc')
// reference vars point to the location
//does not perform any network operations
// and is free!

/* ************* REF STRINGS
For convenience, you can also create references by specifying the path to a 
document or collection as a string, with path components separated by a forward 
slash (/). For example, to create a reference to the alovelace document: */
var docRef = db.doc('users/alovelace')
//nest subcollections
var messageRef = db.collection('rooms').doc('roomA').collection('messages').doc('message1')
