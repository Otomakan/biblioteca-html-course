import { CodingEnvironmentSection } from "../../../components/CodingEnvironment/Section";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
interface InstructionsProps {
    instructions: any;
    explanation: any;
    title: string
}
export const Instructions: React.FC<InstructionsProps> = ({ instructions, explanation, title }) => {
    return <CodingEnvironmentSection>
        <h1>{title}</h1>
        {documentToReactComponents(explanation)}
        {instructions &&
            <>
                <h2>Instructions</h2>
                {documentToReactComponents(instructions)}
            </>
        }
        <style jsx>{`
        p {
            font-size: 2.2rem;
        }`}</style>
    </CodingEnvironmentSection>
}
