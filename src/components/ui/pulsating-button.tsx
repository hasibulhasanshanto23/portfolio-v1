import React from "react";
import { cn } from "@/lib/utils";

// Define props for button and anchor separately
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  download?: boolean;
};

interface PulsatingButtonBaseProps {
  pulseColor?: string;
  duration?: string;
}

// Use a union type to separate button and anchor props
type PulsatingButtonProps =
  | (PulsatingButtonBaseProps & ButtonProps & { href?: never }) // Button mode (no href)
  | (PulsatingButtonBaseProps & AnchorProps & { href: string }); // Anchor mode (requires href)

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#3E4957",
      duration = "1.5s",
      href,
      ...props
    },
    ref
  ) => {
    if (href) {
      // Anchor element (link)
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(
            "relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground",
            className
          )}
          style={
            {
              "--pulse-color": pulseColor,
              "--duration": duration,
            } as React.CSSProperties
          }
          {...(props as AnchorProps)} // Ensure correct props are passed
        >
          <div className="relative z-10">{children}</div>
          <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
        </a>
      );
    }

    // Button element
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground",
          className
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...(props as ButtonProps)} // Ensure correct props are passed
      >
        <div className="relative z-10">{children}</div>
        <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
      </button>
    );
  }
);

PulsatingButton.displayName = "PulsatingButton";
