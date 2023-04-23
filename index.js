// Implement myEach
function myEach(collection, callback) {
    for (let key in collection) {
      callback(collection[key]);
    }
    return collection;
  }
  
  // Implement myMap
  function myMap(collection, callback) {
    let newCollection = [];
    for (let key in collection) {
      newCollection.push(callback(collection[key]));
    }
    return newCollection;
  }
  
  // Implement myReduce
  function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIndex;
    if (initialValue === undefined) {
      accumulator = collection[Object.keys(collection)[0]];
      startIndex = 1;
    } else {
      accumulator = initialValue;
      startIndex = 0;
    }
  
    for (let i = startIndex; i < Object.keys(collection).length; i++) {
      accumulator = callback(accumulator, collection[Object.keys(collection)[i]], i, collection);
    }
  
    return accumulator;
  }
  
  
  // Implement myFind
  function myFind(collection, predicate) {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
    return undefined;
  }
  
  // Implement myFilter
  function myFilter(collection, predicate) {
    let filteredCollection = [];
    for (let key in collection) {
      if (predicate(collection[key])) {
        filteredCollection.push(collection[key]);
      }
    }
    return filteredCollection;
  }
  
  // Implement mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Implement myFirst
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  // Implement myLast
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  // Implement myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Implement myValues
  function myValues(object) {
    return Object.values(object);
  }
  