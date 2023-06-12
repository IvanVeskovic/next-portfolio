import Button from '@/components/button/Button';

export default function Banner() {
    return (
        <header className='hero'>
            <div className="hero__content">
                <p>
                    Welcome to my personal portfolio
                </p>
                <h1>
                    Hello, I'm Ivan, <span>Front-end Developer</span> and it's great to see you here.
                </h1>
                <small>Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</small>

                <div className="hero__actions">
                    <Button text='contact me' type='primary' link='#' />
                    <Button text='Download cv' type='secondary' link='#' download={true} />
                </div>
            </div>
            <div className="hero__image">
                <img src="/images/self-image.png" alt="Person" />
            </div>
        </header>
    )
}