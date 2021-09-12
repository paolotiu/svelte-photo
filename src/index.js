require('svelte/register');
const puppeteer = require('puppeteer');

const template = `
  <html>
    <head>
      %HEAD%
      <style>
        %CSS%
      </style>
    </head>
    <body>
      %HTML%
    </body>
  </html>
`;

const main = async () => {
  const Comp = require('./Component.svelte').default;

  const {
    html,
    css: { code },
    head,
  } = Comp.render({
    x: 10,
  });
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1200,
      height: 630,
    },
  });

  const page = await browser.newPage();

  await page.setContent(
    template.replace('%HEAD%', head).replace('%CSS%', code).replace('%HTML%', html)
  );

  await page.screenshot({
    path: './out.png',
  });

  browser.close();
};
main();
