/* WRITE INITIAL DATABASE */
var db = firebase.firestore();
var citiesRef = db.collection("cities")

/* ****** SIMPLE QUERIES
      the following query returns all cities with state CA */
            // Create a reference to the cities collection
            var citiesRef = db.collection("cities");
            // Create a query against the collection
            var query = citiesRef.where("state","==","CA");
      /* the following query returns all capital cities */
            var citiesRef = db.collection("cities");
            
            var query = citiesRef.where("capital", "==", true);

      /* the .where() method takes three parameters: a field to filter on, a comparison 
      operation, and a value. The comparison can be <, <=, ==, >, >=, or array_contains */
          //some example filters
          citiesRef.where("state", "==", "CA")
          citiesRef.where("population", "<", 100000)
          citiesRef.where("name", ">=", "San Francisco")
          
      /* use the array_contains operator to filter based on array values. For example:  */
      citiesRef.where("regions", "array-contains", "west_coast")

/* ******* COMPOUND AND CHAIN
        You can also chain multiple where() methods to create more specific queries (logical AND). 
        However, to combine the equality operator (==) with a range or array-contains clause (<, <=, >, >=, or array_contains)
        , make sure to create a composite index. */
                  citiesRef.where("state", "==", "CO").where("name", "==", "Denver")
                  citiesRef.where("state", "==", "CA").where("population", "<", 1000000)
        // You can only perform range comparisons (<, <=, >, >=) on a single field, and 
        // you can include at most one array_contains clause in a compound query:
                //Valid
                    citiesRef.where("state", ">=", "CA").where("state", "<=", "IN")
                    citiesRef.where("state", "==", "CA").where("population", ">", 1000000)
                //invalid
                    citiesRef.where("state", ">=", "CA").where("population", ">", 100000)
/* ********Query limitations
Cloud Firestore does not support the following types of queries:
+Single queries across multiple collections or subcollections. Each query runs against a single collection of documents.
+Logical OR queries. In this case, you should create a separate query for each OR condition and merge the query results in your app.
+Queries with a != clause. In this case, you should split the query into a greater-than query and a less-than query.


    
  
