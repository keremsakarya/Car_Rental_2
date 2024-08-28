interface Props {
    title: string
    type?: "submit" | "reset" | "button"
    designs?: string
    disabled?: boolean
    icon?: string
    handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ title, type, designs, disabled, icon, handleClick }: Props) => {
    return (
        <button
            onClick={handleClick}
            disabled={disabled} className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white transition ${designs}`} type={type}>
            <span className="flex-1">{title}</span>
            {icon && <img className="w-6 h-6" src={icon} />}
        </button>
    )
}

export default Button