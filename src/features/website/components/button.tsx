import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren
} from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "inverted";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
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

export function buttonClass({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className
}: ButtonStyleProps = {}) {
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

type ButtonLinkProps = PropsWithChildren<
  ButtonStyleProps &
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "className" | "children" | "type"
    > & {
      href: string;
      external?: boolean;
    }
>;

type ButtonNativeProps = PropsWithChildren<
  ButtonStyleProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
      href?: undefined;
      external?: never;
    }
>;

function isLinkProps(props: ButtonLinkProps | ButtonNativeProps): props is ButtonLinkProps {
  return "href" in props && typeof props.href === "string";
}

export function Button(
  props: ButtonLinkProps | ButtonNativeProps
) {
  const { variant, size, fullWidth, className, children } = props;
  const resolvedClassName = buttonClass({
    variant,
    size,
    fullWidth,
    className
  });

  if (isLinkProps(props)) {
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

  const { type, ...restProps } = props;
  const buttonType: ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    type ?? "button";

  return (
    <button type={buttonType} className={resolvedClassName} {...restProps}>
      {children}
    </button>
  );
}
