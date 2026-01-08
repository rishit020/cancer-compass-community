import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Allowed hosts configuration
const allowedHosts = [
  "localhost",
  "127.0.0.1",
  ".ngrok-free.app",
  ".ngrok-free.dev",
  ".ngrok.io",
  ".ngrok.app",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use relative base path so assets load correctly from any host (localhost, ngrok, etc.)
  base: '/',
  server: {
    host: true, // Listen on all interfaces
    port: 8080,
    // Enable CORS headers to allow assets to load from ngrok
    cors: true,
    // Note: Vite doesn't natively support allowedHosts, but we enforce it via middleware below
    // This property documents the allowed hosts for reference
    allowedHosts: allowedHosts,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Custom plugin to validate and allow specific hosts
    {
      name: "validate-host",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const host = req.headers.host;
          if (!host) {
            return next();
          }

          const hostname = host.split(":")[0];

          const isAllowed =
            hostname === "localhost" ||
            hostname === "127.0.0.1" ||
            allowedHosts.some((pattern) => hostname.endsWith(pattern));

          if (isAllowed) {
            // Set CORS headers for ngrok compatibility
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
            next();
          } else {
            // Reject requests from non-allowed hosts
            res.writeHead(403, { "Content-Type": "text/plain" });
            res.end("Host not allowed");
          }
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
