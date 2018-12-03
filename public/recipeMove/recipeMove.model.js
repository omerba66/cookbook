

const mongoose = require('mongoose');

const RecipeMoveSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  }
});

export default createSeedModel('RecipeMove', RecipeMoveSchema, seed);
