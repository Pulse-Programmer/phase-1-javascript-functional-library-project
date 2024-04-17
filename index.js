function myEach(collection, callback) {
  //returns originalCollection
  let valuesArray = collection;
  if (!Array.isArray(collection)) {
    valuesArray = Object.values(collection);
  }
  valuesArray.forEach(callback);

  return collection;
}

function myMap(collection, callback) {
  let valuesArray = collection;
  if (!Array.isArray(collection)) {
    valuesArray = Object.values(collection);
  }

  const newArray = valuesArray.map(callback);
  return newArray;
}

function myReduce(collection, callback, acc) {
  let valuesArray = collection;
  if (!Array.isArray(collection)) {
    valuesArray = Object.values(collection);
  }

  if (acc === undefined) {
    return valuesArray.reduce(callback);
  }
  return valuesArray.reduce(callback, acc);
}

function myFind(collection, predicate) {
  let valuesArray = collection;
  if (!Array.isArray(collection)) {
    valuesArray = Object.values(collection);
  }

  return valuesArray.find(predicate);
}

function myFilter(collection, predicate) {
  let valuesArray = collection;
  if (!Array.isArray(collection)) {
    valuesArray = Object.values(collection);
  }

  return valuesArray.filter(predicate);
}

function mySize(collection) {
  let valuesArray = collection;
  if (!Array.isArray(collection)) {
    valuesArray = Object.values(collection);
  }

  return valuesArray.length;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }

  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
