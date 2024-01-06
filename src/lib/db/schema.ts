import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const $notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  imageUrl: text("image_url"),
  userId: text("user_id").notNull(),
  editorState: text("editor_state"),
});

export type NoteType = typeof $notes.$inferInsert;

//drizzle-orm vs drizzle-kit

//orm used to interact with database. create a new instance, add stuff to the database, remove stuff, ect
//kit is used to migrate changes. lets say you add a new colum, you will use drizzle-kit to migrate changes to the actual database
