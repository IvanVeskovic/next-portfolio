interface Props {
    link?: string;
    type: string;
    text?: string;
    download?: boolean;
}

export default function Button({ link, type, text, download }: Props) {
    return (
        <a href={link} className={`button button__${type}`} download={download ? true : false}>{text}</a >
    )
}