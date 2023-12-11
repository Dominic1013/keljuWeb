import mongoose from "mongoose";

const { Schema } = mongoose;

const informationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      // required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the Information collection does not exist create a new one.
export default mongoose.models.Information ||
  mongoose.model("Information", informationSchema);
