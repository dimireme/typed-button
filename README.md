# Typed Button

```jsx
import React from 'react';
import styles from './styles.module.scss';

type Props<T extends keyof JSX.IntrinsicElements> = {
  variant?: 'default' | 'danger';
  as?: T;
} & JSX.IntrinsicElements[T];

export const Button = <T extends keyof JSX.IntrinsicElements = 'button'>({
  variant = 'default',
  as,
  ...rest
}: Props<T>) =>
  React.createElement(as ?? 'button', {
    type: 'button',
    className: `${styles.button} ${styles[variant]}`,
    ...rest,
  });

```
