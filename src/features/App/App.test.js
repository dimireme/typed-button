import ReactDOM from 'react-dom/client';
import { App } from 'features/App';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(<App />);
});
