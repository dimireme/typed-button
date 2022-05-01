# Typed Button

![CI/CD](https://github.com/dimireme/typed-button/workflows/deploy-to-github-pages/badge.svg)

[![codecov](https://codecov.io/gh/dimireme/typed-button/branch/main/graph/badge.svg)](https://codecov.io/gh/dimireme/typed-button)

![License](https://img.shields.io/github/license/dimireme/typed-button)

![Preview on github pages](https://dimireme.github.io/typed-button/)

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