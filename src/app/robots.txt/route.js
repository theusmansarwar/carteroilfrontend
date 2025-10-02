export function GET() {
  const content = `User-agent: *
Disallow:

Sitemap: https://carteroilusa.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}