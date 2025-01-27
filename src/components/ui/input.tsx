import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'btflex bth-9 btw-full btrounded-md btborder btborder-input btbg-transparent btpx-3 btpy-1 bttext-base btshadow-sm bttransition-colors file:btborder-0 file:btbg-transparent file:bttext-sm file:btfont-medium file:bttext-foreground placeholder:bttext-muted-foreground focus-visible:btoutline-none focus-visible:btring-1 focus-visible:btring-ring disabled:btcursor-not-allowed disabled:btopacity-50 md:bttext-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
