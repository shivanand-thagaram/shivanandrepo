import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  director: varchar("director", { length: 255 }),
  release_year: integer("release_year"),
  //genre: varchar("genre"),
});
