import { MouseEventHandler } from "react";
import Link from 'next/link'
import { ButtonPrimary } from "../../Button";
export interface LowerBarProps {
    nextPage?: string;
    previousPage?: string;
}
export const LowerBar: React.FC<LowerBarProps> = ({ nextPage, previousPage }) => {
    return (
        <div className="lower-bar-container">
            <Link passHref href={previousPage || ''}>
                <ButtonPrimary inactive={!Boolean(previousPage)} style={{ margin: '0px' }}>
                    Previous
                </ButtonPrimary>
            </Link>
            <Link passHref href={nextPage || ''}>
                <ButtonPrimary inactive={!Boolean(nextPage)} style={{ margin: '0px' }}>
                    Next
                </ButtonPrimary>
            </Link>

            <style jsx>{`
            .lower-bar-container {
                width: 100%;
                border: 0;
                display: flex;
                justify-content:right;
                align-items: center;
                padding-right:1rem;
                height:100%;
            }
            `}
            </style>
        </div >
    )

}