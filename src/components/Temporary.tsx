interface TextComponentProps {
    text: string;
}

export const Temporary = ({ text }: TextComponentProps) => {
    return <h1>{text}</h1>
}