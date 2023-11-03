const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // Add other fields as needed for your document
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;