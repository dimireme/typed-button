import { Button } from 'components/Button';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Button>Button</Button>
      <Button variant="default">Button</Button>
      <Button variant="danger">Button</Button>
      <hr />
      <Button variant="danger" as="h1">
        As H1
      </Button>
      <Button form="my-form">As Button with specific attrs</Button>
      <Button variant="danger" as="a" href="asd" target="_blank">
        As Anchor with specific attrs
      </Button>
      <hr />
      <Button type="submit">Submit Button</Button>
      <Button
        as="textarea"
        rows={8}
        value="As Textarea ignore Children"
        variant="danger"
      >
        Some child content
      </Button>
    </div>
  );
};
