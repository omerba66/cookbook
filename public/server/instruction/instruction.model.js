import { Schema } from 'mongoose';
import { createSeedModel} from "mongoose-plugin-seed";
import { seed } from "./instruction.seed";


const instructionSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  }
});

export default createSeedModel('instruction', instructionSchema, seed);
