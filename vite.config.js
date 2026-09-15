import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    port: 5173,

    // Allows Cloudflare Tunnel / temporary public URL
    allowedHosts: true,
  },
});