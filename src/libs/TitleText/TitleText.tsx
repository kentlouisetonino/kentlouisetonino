import classNames from 'classnames';

export type Size = 'large' | 'small' | 'xsmall' | 'xlarge';

export interface TitleTextProps {
  size?: Size;
  value: string;
  className?: string;
}

export default function TitleText({
  value,
  size,
  className = 'text-title',
}: TitleTextProps) {
  return (
    <span
      className={classNames(
        'leading-tight',
        {
          'text-lg': size === 'xsmall',
          'text-xl': size === 'small',
          'text-2xl': !size,
          'text-4xl': size === 'large',
          'text-6xl': size === 'xlarge',
        },
        className
      )}
    >
      {value}
    </span>
  );
}
