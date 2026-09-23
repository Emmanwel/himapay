const variants = {
  primary:
    "bg-pink-ish text-white shadow-lg shadow-pink-ish/30 hover:bg-pink-ish-500",
  secondary:
    "bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300",
  dark: "bg-neutral-950 text-white hover:bg-neutral-800",
  light: "bg-white text-neutral-900 shadow-lg hover:bg-pale-blue",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-4 text-base",
};

const Button = ({
  as: Component = "a",
  variant = "primary",
  size = "lg",
  leadingIcon: LeadingIcon,
  icon: TrailingIcon,
  className = "",
  children,
  ...props
}) => (
  <Component
    className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap focus-ring transition ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    {LeadingIcon && <LeadingIcon aria-hidden="true" className="size-4" />}
    {children}
    {TrailingIcon && (
      <TrailingIcon
        aria-hidden="true"
        className="size-4 transition-transform group-hover:translate-x-0.5"
      />
    )}
  </Component>
);

export default Button;
