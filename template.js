export default () => {
  return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <title>MERN Kickstart</title>
        </head>
        <body style='background-color: #2d3436;'>
          <div id="root"></div>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`;
};
