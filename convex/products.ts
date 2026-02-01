import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    category: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    if (args.category) {
      return await ctx.db
        .query("products")
        .withIndex("by_category", (q) => q.eq("category", args.category!))
        .collect();
    } else if (args.featured) {
      return await ctx.db
        .query("products")
        .withIndex("by_featured", (q) => q.eq("featured", true))
        .collect();
    }
    
    return await ctx.db.query("products").collect();
  },
});

export const get = query({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    originalPrice: v.optional(v.number()),
    imageUrl: v.string(),
    category: v.string(),
    inStock: v.boolean(),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", args);
  },
});

export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("products")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .take(6);
  },
});
