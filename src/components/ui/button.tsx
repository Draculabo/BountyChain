import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'btinline-flex btitems-center btjustify-center btgap-2 btwhitespace-nowrap btrounded-md bttext-sm btfont-medium bttransition-colors focus-visible:btoutline-none focus-visible:btring-1 focus-visible:btring-ring disabled:btpointer-events-none disabled:btopacity-50 [&_svg]:btpointer-events-none [&_svg]:btsize-4 [&_svg]:btshrink-0',
  {
    variants: {
      variant: {
        default: 'btbg-primary bttext-primary-foreground btshadow hover:btbg-primary/90',
        destructive:
          'btbg-destructive bttext-destructive-foreground btshadow-sm hover:btbg-destructive/90',
        outline:
          'btborder btborder-input btbg-background btshadow-sm hover:btbg-accent hover:bttext-accent-foreground',
        secondary: 'btbg-secondary bttext-secondary-foreground btshadow-sm hover:btbg-secondary/80',
        ghost: 'hover:btbg-accent hover:bttext-accent-foreground',
        link: 'bttext-primary btunderline-offset-4 hover:btunderline',
      },
      size: {
        default: 'bth-9 btpx-4 btpy-2',
        sm: 'bth-8 btrounded-md btpx-3 bttext-xs',
        lg: 'bth-10 btrounded-md btpx-8',
        icon: 'bth-9 btw-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
