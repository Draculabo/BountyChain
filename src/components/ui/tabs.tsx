'use client';

import * as React from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'btinline-flex bth-9 btitems-center btjustify-center btrounded-lg btbg-muted btp-1 bttext-muted-foreground',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'btinline-flex btitems-center btjustify-center btwhitespace-nowrap btrounded-md btpx-3 btpy-1 bttext-sm btfont-medium btring-offset-background bttransition-all focus-visible:btoutline-none focus-visible:btring-2 focus-visible:btring-ring focus-visible:btring-offset-2 disabled:btpointer-events-none disabled:btopacity-50 data-[state=active]:btbg-background data-[state=active]:bttext-foreground data-[state=active]:btshadow',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'btmt-2 btring-offset-background focus-visible:btoutline-none focus-visible:btring-2 focus-visible:btring-ring focus-visible:btring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
