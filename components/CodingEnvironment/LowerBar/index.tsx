import { MouseEventHandler } from "react";
import Link from 'next/link'
import { ButtonPrimary } from "../../Button";
export interface LowerBarProps {
    nextLessonId?: string;
    previousLessonId?: string;
}
export const LowerBar: React.FC<LowerBarProps> = ({ nextLessonId, previousLessonId }) => {
    return (
        <div className="lower-bar">
            {previousLessonId &&
                <Link passHref href={previousLessonId || ''}>
                    <ButtonPrimary inactive={!Boolean(previousLessonId)} style={{ margin: '0px' }}>
                        Previous
                    </ButtonPrimary>
                </Link>
            }
            {nextLessonId &&
                <Link passHref href={nextLessonId || ''}>
                    <ButtonPrimary inactive={!Boolean(nextLessonId)} style={{ margin: '0px' }}>
                        Next
                    </ButtonPrimary>
                </Link>
            }

            <style jsx>{`
            .lower-bar {
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