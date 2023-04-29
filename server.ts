/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer as createViteServer } from 'vite';
// import qs from 'qs';
import { store } from './src/app/store';
import { fetchHomeCards } from './src/components/homeCard/homeCardsSlice';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.resolve(dirname, './dist/client/index.html')).toString();
const parts = html.split('not rendered');

async function createServer() {
  const app = express();
  app.use('/assets', express.static(path.resolve(dirname, './dist/client/assets')));
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    res.write(parts[0]);

    const url = req.originalUrl;

    const isProd = process.env.NODE_ENV === 'production';
    const entryServerPath = isProd ? './server/entry-server.js' : '/src/entry-server.tsx';
    const { render } = isProd
      ? await import(entryServerPath)
      : await vite.ssrLoadModule(entryServerPath);

    const stream = await render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onShellError(error: Error) {
        console.error(error);
      },
      onAllReady() {
        // fetchHomeCards((x) => {
        //   const preloadedState = store.getState();

        //   res.write(`
        // <script>
        //   window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        // </script>
        // `);
        res.write(parts[1]);
        res.end();
        // });
      },
      onError(error: Error) {
        console.error(error);
      },
    });
  });

  app.listen(5173);
}

createServer();
