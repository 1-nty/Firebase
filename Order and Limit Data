/* Cloud Firestore provides powerful query functionality for specifying which
documents you want to retrieve from a collection. */

var db = firebase.firestore();
var citiesRef = db.collections("cities")
/* ******** ORDER AND LIMIT Data
use .orderBy() to sort the ORDER
      *orderBy() also filters for existence of the given field
use .limit() to limit # of documents retrieved

for example */
            // you could query for the first 3 cities alphabetically with:
            citiesRef.orderBy("name").limit(3)
            //or descendingly
            citiesRef.orderBy("name","desc").limit(3)
      //Order multiple fields by chaining
            citiesRef.orderBy("state").orderBy("population","desc")
/* You can combine where() filters with orderBy() and limit(). In the 
following example, the queries define a population threshold, sort by population in 
ascending order, and return only the first few results that exceed the threshold: */
            citiesRef.where("population",">",100000).orderBy("population").limit(2)
    //However, if you have a filter with a range comparison (<, <=, >, >=), your first ordering must be on the same field:
        //Valid    
            citiesRef.where("population",">",100000).orderBy("population")
        //Invalid
            citiesRef.where("population",">",100000).orderBy("country")
