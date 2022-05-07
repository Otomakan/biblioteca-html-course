import { CodingEnvironmentSection } from "../../../components/CodingEnvironment/Section";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
interface InstructionsProps {
    instructions: any;
    explanation: any;
}
export const Instructions: React.FC<InstructionsProps> = ({ instructions, explanation }) => {
    return <CodingEnvironmentSection>
        {documentToReactComponents(explanation)}
        <h2>Instructions</h2>
        {documentToReactComponents(instructions)}
    </CodingEnvironmentSection>
}
