import { createRoot } from 'react-dom/client';
import AppContainer from './common/containers/App';
import Routes from './routes';
import './styles/_main.scss';

const rootElement = document.getElementById('root');
if (rootElement == null) {
	throw new Error('No root element found with id "#root"');
}

const root = createRoot(rootElement);

root.render(
	// TODO RB: add strict mode potentially
  <AppContainer>
    <Routes />
  </AppContainer>,
);
