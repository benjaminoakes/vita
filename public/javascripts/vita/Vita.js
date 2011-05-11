/**
 * Vita: vi in a textarea.
 * 
 * Example:
 * 
 *   var vi = new vita.Vita();
 * 
 * @constructor
 */
vita.Vita = function () {
  this.storage = new vita.Storage(localStorage);
};

vita.Vita.prototype = {
  constructor: vita.Vita,
  
  /**
   * List stored files.
   * 
   * Example:
   * 
   *   vi.list().join(', ');
   */
  list: function () {
    var all = [];

    this.storage.forEach(function (key) {
      if (key.match(/^vita\//)) {
        all.push(key.replace(/^vita\//, ''));
      }
    });

    return all;
  }
};
