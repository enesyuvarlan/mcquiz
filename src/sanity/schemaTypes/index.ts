import { type SchemaTypeDefinition } from "sanity";
import questionSchema from "../questions";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [questionSchema],
};
