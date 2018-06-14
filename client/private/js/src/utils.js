// Utilities.
class Utils {
  // From an external library.
  static randomString(length) {
    return Random.string('qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM1234567890?!#$%&/()«»<>;:^~=][*+')(Random.engines.browserCrypto, length);
  }

  // From an external library.
  static randomNumString(length) {
    return Random.string('1234567890')(Random.engines.browserCrypto, length);
  }

  static parseIDs(id) {
    const split = id.split(/_/g);
    return split;
  }

  static calculateGrid(cellWidthPercent, cellHeightPercent) {
    const x = Math.floor(100 / cellWidthPercent) - 1;
    const y = Math.floor(100 / cellHeightPercent) - 1;
    return {
      x: x,
      y: y
    }
  }

  static insertGrid(gridX, gridY, target, rowTemplate, cellTemplate) {
    let rowCount = 0;
    let cellCount = 0;

    for (let rowIdx = 0; rowIdx <= gridX; rowIdx++) {
      target.innerHTML += rowTemplate(rowIdx + 1);
      rowCount++;

      for (let cellIdx = 0; cellIdx <= gridY; cellIdx++) {
        const lastInsertedRow = document.getElementById(`row-${rowCount}`);
        lastInsertedRow.innerHTML += cellTemplate(cellCount + 1);
        cellCount++;
      }
    }
  }
}

class Errors {
  static get existingKey() { return 'An item with the same key has already been added.' };
}

class Dictionary {
  /**
   * 
   * @param {Boolean} uniqueKeys
   * Whether the keys should be unique or not.
   * Optional. It defaults to false.
   */
  constructor(uniqueKeys) {
    this.elements = [];

    this.uniqueKeys = uniqueKeys;
    if (!uniqueKeys) this.uniqueKeys = false;

    this.count = () => {
      this.elements.length;
    };

    /**
     * 
     * @param {any} key
     * 
     * @param {any} value
     */
    this.add = (key, value) => {
      if (this.uniqueKeys && this.findIndexOfKey(key) !== undefined)
        throw new Error(Errors.existingKey);

      this.elements.push({ [key]: value });
    };

    this.remove = (key) => {
      this.elements.splice(this.findIndexOfKey(key), 1);
    };

    this.clear = () => {
      this.elements = [];
    }

    this.getByKey = (key) => {
      return this.elements[this.findIndexOfKey(key)][key];
    };

    /**
     * 
     * @param {int} index
     * 
     * @returns {array} value
     * It returns an array with the values inside the input index.
     */
    this.getByIndex = (index) => {
      return Object.values(this.elements[index]);
    };

    this.findIndexOfKey = (key, Callback) => {
      for (let i = 0; i < this.elements.length; i++) {
        if (Object.keys(this.elements[i])[0] === key) {
          return i;
        }
      }
    }
  }
}
