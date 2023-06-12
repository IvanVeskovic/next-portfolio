interface Props {
    title: string;
    images: string[];
}

export default function SingleSkill({ title, images }: Props) {
    return (
        <div className="skill">
            <div className={`skill__image-wrapper ${images.length > 1 ? 'multiple' : ''}`}>
                {images.map((singleImgSrc, index) => (
                    <img src={singleImgSrc} alt={title} key={index} className={images.length > 1 ? 'multyple' : ''} />
                )
                )}
            </div>
            <div className="skill__title">
                {title}
            </div>
        </div>
    )
}