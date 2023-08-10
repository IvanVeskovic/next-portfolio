import React from 'react'
import Image from 'next/image'

function SocialItem({ imgSrc, altText }: { [key: string]: string }) {
    return (
        <div className="contact-social__item">
            <Image src={imgSrc} height={20} width={20} alt={altText} />
        </div>
    )
}

export default SocialItem