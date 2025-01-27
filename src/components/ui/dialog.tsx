'use client';

import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'btfixed btinset-0 btz-50 btbg-black/80 bt data-[state=open]:btanimate-in data-[state=closed]:btanimate-out data-[state=closed]:btfade-out-0 data-[state=open]:btfade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'btfixed btleft-[50%] bttop-[50%] btz-50 btgrid btw-full btmax-w-lg bttranslate-x-[-50%] bttranslate-y-[-50%] btgap-4 btborder btbg-background btp-6 btshadow-lg btduration-200 data-[state=open]:btanimate-in data-[state=closed]:btanimate-out data-[state=closed]:btfade-out-0 data-[state=open]:btfade-in-0 data-[state=closed]:btzoom-out-95 data-[state=open]:btzoom-in-95 data-[state=closed]:btslide-out-to-left-1/2 data-[state=closed]:btslide-out-to-top-[48%] data-[state=open]:btslide-in-from-left-1/2 data-[state=open]:btslide-in-from-top-[48%] sm:btrounded-lg',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="btabsolute btright-4 bttop-4 btrounded-sm btopacity-70 btring-offset-background bttransition-opacity hover:btopacity-100 focus:btoutline-none focus:btring-2 focus:btring-ring focus:btring-offset-2 disabled:btpointer-events-none data-[state=open]:btbg-accent data-[state=open]:bttext-muted-foreground">
        <X className="bth-4 btw-4" />
        <span className="btsr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('btflex btflex-col btspace-y-1.5 bttext-center sm:bttext-left', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'btflex btflex-col-reverse sm:btflex-row sm:btjustify-end sm:btspace-x-2',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('bttext-lg btfont-semibold btleading-none bttracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('bttext-sm bttext-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
