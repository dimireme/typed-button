import React from 'react';
import styles from './styles.module.scss';

type Props<T extends keyof JSX.IntrinsicElements> = {
  variant?: 'default' | 'danger';
  as?: T;
} & JSX.IntrinsicElements[T];

export function Button<T extends keyof JSX.IntrinsicElements = 'button'>({
  variant = 'default',
  as,
  ...rest
}: Props<T>) {
  return React.createElement(as ?? 'button', {
    type: 'button',
    className: `${styles.button} ${styles[variant]}`,
    ...rest,
  });
}
