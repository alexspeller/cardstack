module.exports = class PendingChange {
  constructor(originalDocument, finalDocument, finalizer) {
    this.originalDocument = originalDocument;
    this.finalDocument = finalDocument;
    this.serverProvidedValues = new Map();
    this._finalizer = finalizer;
  }
  async finalize() {
    return this._finalizer.call(null, this);
  }
};
