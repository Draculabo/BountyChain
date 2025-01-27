import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'btflex btmin-h-[60px] btw-full btrounded-md btborder btborder-input btbg-transparent btpx-3 btpy-2 bttext-base btshadow-sm placeholder:bttext-muted-foreground focus-visible:btoutline-none focus-visible:btring-1 focus-visible:btring-ring disabled:btcursor-not-allowed disabled:btopacity-50 md:bttext-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
