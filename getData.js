/* ****** Two ways to retrieve data in Cloud Firestore
1- Call a method to get the data
2- Set a listener to receive data-change events
When you set a listener, Cloud Firestore sends your listener an initial snapshot of the data, and then another snapshot each time the document changes.
*/


/* WRITE INITIAL DATABASE */
var db = firebase.firestore();
var citiesRef = db.collection("cities")

citiesRef.doc("SF").set({
  name:"San Francisco", state:"CA", country:"USA",
  capital: false, population:860000,
  regions: ["west_coast","norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });
    

/* ****** Get a Document 
retrieve using .get()  */

      var docRef = db.collection("cities").doc("SF");
      
      docRef.get().then(function(doc){
        if (doc.exists){
          console.log("Document data: ", doc.data());
        } else {
          //doc.data() will be undefined in this case
          console.log("No such document!")
        }
      }).catch(function(error){
        console.log("Error getting document: ", error);
      });

/* ******* Source Options   
      For platforms with offline support, you can set the source option to control how a get call uses the offline cache.
      
      By default, a get call will attempt to fetch the latest document snapshot from your database. On platforms with offline support, the client library will use the offline cache if the network is unavailable or if the request times out.
      
      You can specify the source option in a get() call to change the default behavior. You can fetch from only the database and ignore the offline cache, or you can fetch from only the offline cache. 
      
      For example: */
      var docRef = db.collection("cities").doc("SF");
      // Valid options for source are 'server', 'cache', or 'default'
      var getOptions = {
        source: 'cache'
      }
      // Get a document, forcing the SDK to fetch from the offline cache.
      docRef.get(getOptions).then(function(doc) {
          // Document was found in the cache. If no cached document exists,
          // an error will be returned to the 'catch' block below.
          console.log("Cached document data:", doc.data());
      }).catch(function(error) {
          console.log("Error getting cached document:", error);
      });

/* ******* Get multiple documents from a collection 
    use .where() to query for all of the documents that meet a certain condition
    use .get() to retrieve all the results  */
    db.collection("cities").where("capital", "==", true)
      .get()
      .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error){
        console.log("Error getting documents: ",error);
      });
/* ******* Get all documents in a collection
retrieve all documents by omitting .where() */
db.collection("cities").get().then(function(querySnapshot){
  querySnapshot.forEach(function(doc){
    console.log(doc.id, " => ", doc.data());
  });
});
