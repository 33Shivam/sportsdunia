"use client";

import { ColumnDef } from "@tanstack/react-table";

// Define the Article type
export type Article = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

// Utility function to limit text to a certain number of characters
const limitCharacters = (text: string, maxChars: number) => {
  return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
};

// Utility function to limit text to a certain number of words
const limitWords = (text: string, maxWords: number) => {
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};

// Define columns for the table
export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <a
        href={row.original.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {limitWords(row.original.title, 10)}...
      </a>
    ),
  },

  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => (
      <p>{limitCharacters(row.original.author || "Unknown", 20)}</p>
    ),
  },
  {
    accessorKey: "source.name",
    header: "Source Name",
    cell: ({ row }) => (
      <p>{limitCharacters(row.original.source.name || "N/A", 8)}</p>
    ),
  },

  {
    accessorKey: "publishedAt",
    header: "Published At",
    cell: ({ row }) => (
      <p>{new Date(row.original.publishedAt).toLocaleDateString()}</p>
    ),
  },
  {
    accessorKey: "url",
    header: "URL",
    cell: ({ getValue }) => (
      <a
        href={getValue() as string}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Visit
      </a>
    ),
  },
];
