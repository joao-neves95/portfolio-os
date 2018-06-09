// Utilities.
'use strict'

class Utils {
  static randomString(length) {
    return Random.string()(Random.engines.browserCrypto, length);
  }

  static parseIDs(id) {
    const split = id.split(/_/g);
    return split;
  }
}
