'use client';

import * as React from 'react';

import * as ToastPrimitives from '@radix-ui/react-toast';
import {  cva } from 'class-variance-authority';
import type {VariantProps} from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'btfixed bttop-0 btz-[100] btflex btmax-h-screen btw-full btflex-col-reverse btp-4 sm:btbottom-0 sm:btright-0 sm:bttop-auto sm:btflex-col md:btmax-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'btgroup btpointer-events-auto btrelative btflex btw-full btitems-center btjustify-between btspace-x-2 btoverflow-hidden btrounded-md btborder btp-4 btpr-6 btshadow-lg bttransition-all data-[swipe=cancel]:bttranslate-x-0 data-[swipe=end]:bttranslate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:bttranslate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:bttransition-none data-[state=open]:btanimate-in data-[state=closed]:btanimate-out data-[swipe=end]:btanimate-out data-[state=closed]:btfade-out-80 data-[state=closed]:btslide-out-to-right-full data-[state=open]:btslide-in-from-top-full data-[state=open]:sm:btslide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'btborder btbg-background bttext-foreground',
        destructive:
          'btdestructive btgroup btborder-destructive btbg-destructive bttext-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'btinline-flex bth-8 btshrink-0 btitems-center btjustify-center btrounded-md btborder btbg-transparent btpx-3 bttext-sm btfont-medium bttransition-colors hover:btbg-secondary focus:btoutline-none focus:btring-1 focus:btring-ring disabled:btpointer-events-none disabled:btopacity-50 group-[.destructive]:btborder-muted/40 group-[.destructive]:hover:btborder-destructive/30 group-[.destructive]:hover:btbg-destructive group-[.destructive]:hover:bttext-destructive-foreground group-[.destructive]:focus:btring-destructive',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'btabsolute btright-1 bttop-1 btrounded-md btp-1 bttext-foreground/50 btopacity-0 bttransition-opacity hover:bttext-foreground focus:btopacity-100 focus:btoutline-none focus:btring-1 group-hover:btopacity-100 group-[.destructive]:bttext-red-300 group-[.destructive]:hover:bttext-red-50 group-[.destructive]:focus:btring-red-400 group-[.destructive]:focus:btring-offset-red-600',
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="bth-4 btw-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('bttext-sm btfont-semibold [&+div]:bttext-xs', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('bttext-sm btopacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastAction,
  type ToastActionElement,
  ToastClose,
  ToastDescription,
  type ToastProps,
  ToastProvider,
  ToastTitle,
  ToastViewport,
};
