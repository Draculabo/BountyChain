'use client';

import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'btpeer bth-4 btw-4 btshrink-0 btrounded-sm btborder btborder-primary btshadow focus-visible:btoutline-none focus-visible:btring-1 focus-visible:btring-ring disabled:btcursor-not-allowed disabled:btopacity-50 data-[state=checked]:btbg-primary data-[state=checked]:bttext-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('btflex btitems-center btjustify-center bttext-current')}
    >
      <Check className="bth-4 btw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
