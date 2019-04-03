/* ***********PATHTOIT*************** 
db.collection()
	CollectionReference
.get()
	Promise<QuerySnapshot>
.forEach()
	QueryDocumentSnapshot
		.ref = DocumentReference
Update() is a method of DocumentReference so the code to update all documents in a collection is:

Example
db.collection("movieWithComments").get()
  .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          // doc.data() is never undefined for query doc snapshots
          doc.ref.update({"Comments":['hey','nice','yo']})
        });
      })
  
Implemented as use all code  */
  
function updateAllInCollection(collection,updateObject){
  db.collection(String(collection)).get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
      doc.ref.update(updateObject)
    });
  })
}
