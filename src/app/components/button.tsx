type Variant = "success" | "danger" | "neutral";
type ButtonProps = {
    children: React.ReactNode;
    variant?: Variant;
    onClick?: () => void;
}

const Button = ({ children, variant = "neutral", onClick,}: ButtonProps) => {
    const base = " p-3 rounded-sm font-medium hover:text-white";

    const variants: Record<Variant, string> = {
        success: "bg-green-400 hover:bg-green-600",
        danger: "bg-red-400 hover:bg-red-600",
        neutral: "bg-gray-400 hover:bg-gray-600",
    }

    return (
        <button onClick={onClick} className={`${base} ${variants[variant]}`}>
            {children}
        </button>
    )
}

export default Button;