var db = firebase.firestore();
var obj = new Object
// add simple
db.collection("newOrExistingCollection").add(obj)

// add complex
// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
// .then to chain js functions
db.collection("data").doc("nameOfDocument").set(obj)
.then(function(){console.log("Success!")})

// will need to manually construct objects as JS is classless!
        // Supported
        db.collection("data").doc("one").set({foo:'bar'});
        
        // Not supported
        class Foo {
           constructor () {
            this.foo =' bar';
          }
        }
        db.collection("data").doc("one").set(new Foo());
        
/* ******** ADD A Document
    When you use .set() to create a document, you must specify an ID for the document to create.
    For Example: */
    db.collection("cities").doc("documentNameRequired").set(data);
    /* But sometimes there isn't a meaningful ID for the document, and it's more convenient to let Cloud
    Firestore auto-generate an ID for you. You can do this by calling add()
    For Example: */
    db.collection("cities").add(obj)
    /* ******** call just .doc() to create a new document with auto-generated id and data add later */
              // Add a new document with a generated id.
              var newCityRef = db.collection("cities").doc();
              
              // later...
              newCityRef.set(data);
      
/* ******** UPDATE A Document
    To update some fields of a document without overwriting the entire document, use the update() methodo update some fields of a document without overwriting the entire document, use the update() method */
    var washingtonRef = db.collection("cities").doc("DC");
    
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        capital: true
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
/* If your document contains nested objects, you can use "dot notation" to reference nested fields within the document when you call update() */
    // Create an initial document to update.
    var frankDocRef = db.collection("users").doc("frank");
    frankDocRef.set({
        name: "Frank",
        favorites: { food: "Pizza", color: "Blue", subject: "recess" },
        age: 12
    });
    
    // To update age and favorite color:
    db.collection("users").doc("frank").update({
        "age": 13,
        "favorites.color": "Red"
    })
/*You can also add server timestamps to specific fields in your documents, to track when an update was received by the server */
    var docRef = db.collection('objects').doc('some-id');
    
    // Update the timestamp field with the value from the server
    var updateTimestamp = docRef.update({
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

/* ******** UPDATE AN Array
.arrayUnion() add elements to an array but only elements not already present
.arrayRemove() removes all instances of each given Element */
      var washingtonRef = db.collection("cities").doc("DC");
      
      // Atomically add a new region to the "regions" array field.
      washingtonRef.update({
          regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
      });
      
      // Atomically remove a region from the "regions" array field.
      washingtonRef.update({
          regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
      });
      
/* ******** Increment a numerical value
.increment(num) // if not number will set the value to it */
var washingtonRef = db.collection('cities').doc('DC');

// Atomically increment the population of the city by 50.
washingtonRef.update({
    population: firebase.firestore.FieldValue.increment(50)
});      
      
      
      
      
      
