// Belajar Vibe Koding
// A fun Bun starter example

const greeting = `< 索张ルダンダプ！`;
const info = `(Powered by https://bun.sh)`;
const message = "Today's voice of code :-)";

console.log(greeting);
console.log(info);
console.log(message);

// Bun native APIs
const server = Bun.server {
  port: 3000,
  fetch(req) {
    return new Response(`Belajar Vibe Koding! 😄`);
  },
};

console.log(`Server running on http://localhost:${server.port}`);
