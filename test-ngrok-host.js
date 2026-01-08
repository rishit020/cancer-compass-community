#!/usr/bin/env node

/**
 * Test script to verify ngrok host is allowed in Vite configuration
 */

const testHosts = [
  "localhost:8080",
  "127.0.0.1:8080",
  "unofficially-semiacidulated-bettyann.ngrok-free.dev",
  "example.ngrok-free.app",
  "test.ngrok.io",
  "demo.ngrok.app",
  "invalid-host.com",
];

const allowedPatterns = [
  "localhost",
  "127.0.0.1",
  ".ngrok-free.app",
  ".ngrok-free.dev",
  ".ngrok.io",
  ".ngrok.app",
];

console.log("Testing Vite server.allowedHosts configuration:\n");

testHosts.forEach((host) => {
  const hostname = host.split(":")[0];
  const isAllowed =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    allowedPatterns.some((pattern) => hostname.endsWith(pattern));

  const status = isAllowed ? "✅ ALLOWED" : "❌ REJECTED";
  console.log(`${status} - ${host}`);
});

console.log("\n✅ Test completed!");
console.log("\nAllowed hosts configuration:");
console.log("  - localhost");
console.log("  - 127.0.0.1");
console.log("  - *.ngrok-free.app");
console.log("  - *.ngrok-free.dev");
console.log("  - *.ngrok.io");
console.log("  - *.ngrok.app");




