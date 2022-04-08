import { CodingEnvironmentSection } from "../../../components/CodingEnvironment/Section";

interface InstructionsProps {
    instructions: React.ReactNode
}
export const Instructions: React.FC<InstructionsProps> = ({ instructions }) => {

    return <CodingEnvironmentSection>{instructions}</CodingEnvironmentSection>

}
