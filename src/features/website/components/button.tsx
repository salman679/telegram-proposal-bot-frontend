import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren
} from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "inverted";
export type ButtonSize = "sm" | "md" | "lg";

interface WebsiteButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const baseClass =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-transparent font-extrabold leading-none tracking-[-0.01em] no-underline transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--button-ring)]";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[44px] px-5 py-[11px] text-[0.9rem]",
  md: "min-h-[48px] px-6 py-3 text-[0.95rem]",
  lg: "min-h-[52px] px-7 py-[13px] text-[0.98rem]"
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "[background:var(--gradient-primary)] !text-white visited:!text-white hover:!text-white focus:!text-white [&_svg]:!text-white shadow-[0_12px_28px_rgba(74,64,224,0.18)] hover:brightness-[1.03]",
  secondary:
    "bg-[#dfe3e6] !text-[#4a40e0] visited:!text-[#4a40e0] hover:bg-[#d9dde0] hover:!text-[#4a40e0] focus:!text-[#4a40e0] [&_svg]:!text-[#4a40e0] shadow-[0_10px_22px_rgba(74,64,224,0.08)]",
  tertiary:
    "bg-transparent px-0 py-0 !text-[var(--primary)] visited:!text-[var(--primary)] hover:!text-[var(--primary)] focus:!text-[var(--primary)] shadow-none",
  inverted:
    "bg-white !text-[#4a40e0] visited:!text-[#4a40e0] hover:bg-[#f6f5ff] hover:!text-[#4a40e0] focus:!text-[#4a40e0] [&_svg]:!text-[#4a40e0] shadow-[0_12px_24px_rgba(11,16,32,0.12)] ring-1 ring-[rgba(74,64,224,0.08)]"
};

export function websiteButtonClass({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className
}: WebsiteButtonStyleProps = {}) {
  return [
    baseClass,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");
}

type WebsiteButtonLinkProps = PropsWithChildren<
  WebsiteButtonStyleProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
      href: string;
      external?: boolean;
    }
>;

type WebsiteButtonNativeProps = PropsWithChildren<
  WebsiteButtonStyleProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
      href?: undefined;
      external?: never;
    }
>;

export function WebsiteButton(
  props: WebsiteButtonLinkProps | WebsiteButtonNativeProps
) {
  const { variant, size, fullWidth, className, children } = props;
  const resolvedClassName = websiteButtonClass({
    variant,
    size,
    fullWidth,
    className
  });

  if ("href" in props && props.href) {
    const { href, external, ...restProps } = props;
    const isExternal = external || /^(https?:)?\/\//.test(href);

    if (isExternal) {
      return (
        <a href={href} className={resolvedClassName} {...restProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={resolvedClassName} {...restProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...restProps } = props;

  return (
    <button type={type} className={resolvedClassName} {...restProps}>
      {children}
    </button>
  );
}
