
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    inactive?: boolean;
}
export const ButtonPrimary: React.FC<ButtonProps> = props => {
    const { children, inactive, ...rest } = props;


    // if (inactive) {
    //     return <button className="button ">
    //         {children}

    //         </style>
    //     </button>
    // }
    // else {
    return (
        <button
            className={`button ${inactive && 'inactive'}`} {...rest}>
            {children}
            <style jsx>{`
                .inactive {
                    background: grey;
                    color: white;
                }
            `
            }
            </style>
        </button>
    )
    {/* } */ }
}