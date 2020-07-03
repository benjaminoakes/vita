/**
 * Wrapper for Storage object to add convenience functions without polluting globals.
 * 
 * Example:
 * 
 *   var storage = new vita.Storage(localStorage);
 *
 * @constructor
 */
vita.Storage = function (storage) {
  this.storage = storage;
};

vita.Storage.prototype = {
  constructor: vita.Storage,
  
  /**
   * Standard iterator.
   *
   * Example:
   *
   *   storage.forEach(function (key, value) {
   *     // ...
   *   });
   */
  forEach: function (fn) {
    var i, key;

    for (i = 0; i < this.storage.length; i++) {
      key = this.storage.key(i);
      fn(key, this.storage.getItem(key));
    }
  }
};
