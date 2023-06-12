interface Props {
    [key: string]: string;
}

export default function RecentSingleWork({ title, imgSrc, description, githubLnk, liveLink }: Props) {
    return (
        <div className="work">
            <div className="work__img">
                <img src={imgSrc} alt="work" />
                <div className="work__links">
                    <a href={githubLnk || '#'} className="work__link work__link--github">
                        <img src="/images/social/github.svg" alt="github" />
                    </a>
                    <a href={liveLink || '#'} className="work__link work__link--live">
                        <img src="/images/social/global.png" alt="github" />
                    </a>
                </div>
            </div>
            <div className="work__content">
                <h3 className="work__title">{title}</h3>
                <p className="work__description">{description}</p>
            </div>
        </div>
    )
}