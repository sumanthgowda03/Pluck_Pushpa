import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Must be logged in to upload files");
    }
    return await ctx.storage.generateUploadUrl();
  },
});

export const getImageUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const createProductWithImage = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    originalPrice: v.optional(v.number()),
    storageId: v.id("_storage"),
    category: v.string(),
    inStock: v.boolean(),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Must be logged in to create products");
    }

    // Get the image URL from storage
    const imageUrl = await ctx.storage.getUrl(args.storageId);
    if (!imageUrl) {
      throw new Error("Invalid image file");
    }

    const { storageId, ...productData } = args;
    
    return await ctx.db.insert("products", {
      ...productData,
      imageUrl,
      storageId, // Store the storage ID for future reference
    });
  },
});

export const deleteProduct = mutation({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Must be logged in to delete products");
    }

    const product = await ctx.db.get(args.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    // Delete the image from storage if it exists
    if (product.storageId) {
      await ctx.storage.delete(product.storageId);
    }

    await ctx.db.delete(args.productId);
  },
});

export const updateProduct = mutation({
  args: {
    productId: v.id("products"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    originalPrice: v.optional(v.number()),
    category: v.optional(v.string()),
    inStock: v.optional(v.boolean()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Must be logged in to update products");
    }

    const { productId, ...updates } = args;
    
    // Remove undefined values
    const cleanUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, value]) => value !== undefined)
    );

    await ctx.db.patch(productId, cleanUpdates);
  },
});
