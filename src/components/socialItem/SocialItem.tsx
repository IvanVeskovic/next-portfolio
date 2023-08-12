import React from 'react'
import Image from 'next/image'

function SocialItem({ imgSrc, altText, link }: { [key: string]: string }) {
    return (
        <a href={link} className="contact-social__item">
            <Image src={imgSrc} height={20} width={20} alt={altText} />
        </a>
    )
}

export default SocialItem