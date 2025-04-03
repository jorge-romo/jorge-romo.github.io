import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type _ButtonProps<AsTarget> = {
  as?: AsTarget;
  variant?: 'link' | 'text' | 'default' | 'standard';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  rounded?: boolean | 'full' | 'xs' | 'sm' | 'md' | 'lg';
  noPadding?: boolean;
};

export type ButtonProps<
  AsTarget extends 'button' | 'a' | typeof Link = 'button',
  AsTargetProps extends object = React.ComponentPropsWithRef<AsTarget>,
> = AsTargetProps & _ButtonProps<AsTarget>;

export function Button<
  AsTarget extends 'button' | 'a' | typeof Link = 'button',
>(props: React.PropsWithChildren<ButtonProps<AsTarget>>) {
  const {
    as: AsElement = 'button',
    variant = 'standard',
    size = 'sm',
    rounded = 'md',
    className,
    children,
    ...rest
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = props as React.PropsWithChildren<ButtonProps<AsTarget>> & { as: any };

  return (
    <AsElement
      {...rest}
      className={clsx(
        'inline-flex items-center justify-center transition-colors duration-custom',
        variant === 'text' &&
          'text-primary hover:text-primary/80 dark:text-zinc-100 dark:hover:text-zinc-100/50',
        variant === 'link' &&
          'text-primary underline hover:text-primary/80 dark:text-zinc-100 dark:hover:text-zinc-100/50',
        variant === 'standard' &&
          'bg-zinc-200 text-primary hover:bg-zinc-200/50 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-700/50',
        variant === 'default' &&
          'text-primary hover:bg-zinc-200/50 dark:text-zinc-200 dark:hover:bg-zinc-700/80',
        size === 'xs' && [
          'gap-2 text-xs',
          variant !== 'text' && variant !== 'link' && 'px-2 py-1',
        ],
        size === 'sm' && [
          'gap-2 text-sm',
          variant !== 'text' && variant !== 'link' && 'px-4 py-2',
        ],
        size === 'md' && [
          'text-md gap-4',
          variant !== 'text' && variant !== 'link' && 'px-8 py-4',
        ],
        size === 'lg' && [
          'gap-8 text-lg',
          variant !== 'text' && variant !== 'link' && 'px-12 py-6',
        ],
        rounded === 'xs' && 'rounded-xs',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'full' && 'rounded-full',
        rounded === true && 'rounded-full',
        rounded === false && 'rounded-none',
        className ?? '',
      )}
    >
      {children}
    </AsElement>
  );
}
