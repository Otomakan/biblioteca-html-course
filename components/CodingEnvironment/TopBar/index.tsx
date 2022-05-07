import { MouseEventHandler } from "react";
import Link from 'next/link'
import { ButtonPrimary } from "../../Button";
export interface LowerBarProps {
    nextLesson?: string;
    previousLesson?: string;
}
export const LowerBar: React.FC<LowerBarProps> = ({ nextLesson, previousLesson }) => {
    return (
        <div className="lower-bar-container">
            <Link passHref href={previousLesson || ''}>
                <ButtonPrimary inactive={!Boolean(previousLesson)} style={{ margin: '0px' }}>
                    Previous
                </ButtonPrimary>
            </Link>
            <Link passHref href={nextLesson || ''}>
                <ButtonPrimary inactive={!Boolean(nextLesson)} style={{ margin: '0px' }}>
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