import ReactDOM from 'react-dom/client';
import { Button } from 'components/Button';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(<Button />);
});
