import fs from "fs";
import http from "http";
import path from "path";
import url from "url";

// Local port for http server to listen on
const PORT = 9000;

// Get your API key from https://makersuite.google.com/app/apikey
// Access your API key as an environment variable
const API_KEY = "AIzaSyAW6sSGPO3y7nNepJDUj7ncwMKpUK71ioo";

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

// Maps file extention to MIME types
// Full list can be found here: https://www.freeformatter.com/mime-types-list.html
const mimeType = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
};

http
  .createServer((req, res) => {
    console.log(`  ${req.method} ${req.url}`);

    // Parse URL
    const parsedUrl = url.parse(req.url);

    // Extract URL path
    // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
    let sanitizedPath = path
      .normalize(parsedUrl.pathname)
      .replace(/^(\.\.[\/\\])+/, "")
      .substring(1);

    if (sanitizedPath === "API_KEY") {
      res.end(API_KEY);
      return;
    }

    if (sanitizedPath === "") {
      sanitizedPath = "index.html";
    }

    // based on the URL path, extract the file extention. e.g. .js, .doc, ...
    const ext = path.parse(sanitizedPath).ext;

    try {
      const data = fs.readFileSync(sanitizedPath);

      // If the file is found, set Content-Type and send data
      if (mimeType[ext]) {
        res.setHeader("Content-Type", mimeType[ext]);
      }
      res.end(data);
    } catch (err) {
      // If the file is not found, return 404
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(parseInt(PORT));

console.log(
  `Server listening. Pages:\n - http://localhost:${PORT}\n - http://localhost:${PORT}/chat.html`,
);