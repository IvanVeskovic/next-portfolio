import Button from "@/components/button/Button"

interface Props {
    [key: string]: string
}

export default function Service({ text, title, imgSrc, buttonText, buttonLink, buttonType }: Props) {
    return (
        <div className="service">
            <div className="service__image">
                <img src={imgSrc} alt={title} />
            </div>
            <h3 className="service__heading">
                {title}
            </h3>
            <p className="service__text">
                {text}
            </p>

            {buttonText && <Button text={buttonText} link={buttonLink} type={buttonType} />}
        </div>
    )
}