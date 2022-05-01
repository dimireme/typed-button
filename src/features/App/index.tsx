import { Button } from 'components/Button';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Button>Submit</Button>
      <Button variant="default">Submit</Button>
      <Button variant="danger">Submit</Button>
      <hr />
      <Button variant="danger" as="h1">
        Submit
      </Button>
      <Button form="my-form">Submit</Button>
      <Button variant="danger" as="a" href="asd" target="_blank">
        Submit
      </Button>
      <Button type="button">Submit</Button>
    </div>
  );
};
