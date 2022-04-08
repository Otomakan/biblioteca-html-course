
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes { }
export const ButtonPrimary: React.FC<ButtonProps> = props => {
    const { children, ...rest } = props;

    return (
        <button className="button" {...rest}>{children}</button>
    )
}