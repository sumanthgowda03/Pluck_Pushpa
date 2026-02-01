import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    originalPrice: v.optional(v.number()),
    imageUrl: v.string(),
    storageId: v.optional(v.id("_storage")), // Store reference to uploaded image
    category: v.string(),
    inStock: v.boolean(),
    featured: v.optional(v.boolean()),
  }).index("by_category", ["category"])
    .index("by_featured", ["featured"]),
  
  categories: defineTable({
    name: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
