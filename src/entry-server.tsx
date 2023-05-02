import { StaticRouter } from 'react-router-dom/server';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

// eslint-disable-next-line import/prefer-default-export
export const render = (
  path: string | Partial<Location>,
  options: RenderToPipeableStreamOptions | undefined
) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={path}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    options
  );
  return stream;
};
