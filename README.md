# Typed Button

![CI/CD](https://github.com/dimireme/typed-button/workflows/deploy/badge.svg)
[![codecov](https://codecov.io/gh/dimireme/typed-button/branch/main/graph/badge.svg)](https://codecov.io/gh/dimireme/typed-button)
![License](https://img.shields.io/github/license/dimireme/typed-button?)

<a href="https://dimireme.github.io/typed-button/" target="_blank">Preview on github pages</a>

## Button component

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

## Usage

#### Default

```jsx
<Button form="my-form">Submit</Button>
```

IntelliSense attributes specific for `<button>` tag. Prevent others attributes.

#### Custom tag

```jsx
<Button as="a" href="#" target="_blank">
  Read more
</Button>
```

IntelliSense attributes specific for `<a>` tag. Prevent others attributes.
