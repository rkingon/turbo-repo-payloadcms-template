import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      views: {
        myCustomView: {
          Component: "@repo/payload-config/views/dashboard#Dashboard",
          path: "/my-custom-view",
        },
      },
    },
    importMap: {
      baseDir: ".",
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: "./payload-types.ts",
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
});
