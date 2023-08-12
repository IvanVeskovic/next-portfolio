import React from 'react';
import SectionHeading from '@/components/heading/SectionHeading';
import contactImage from '../../../public/images/contact-banner.jpg';
import contactMobile from '../../../public/images/social/mobile.svg';
import contactGithub from '../../../public/images/social/github.svg';
import contactLinkedin from '../../../public/images/social/linkendin.svg';
import contactMail from '../../../public/images/social/mail.svg';

import Image from 'next/image';
import SocialItem from '@/components/socialItem/SocialItem';

function Contact() {
    return (
        <section className='contact'>
            <div className="contact-wrapper">
                <SectionHeading title="Contact" />
                <div className="contact__content">
                    <div className='contact__background-img'>
                        <Image src={contactImage}
                            fill={true}
                            alt="Picture of the author"
                        />
                    </div>


                    <div className="form-container">
                        <h3 className="contact-heading">
                            You are here with a reason, <span>let's connect.</span>
                        </h3>
                        <p className="contact-text">
                            Email me to: <a href="mailto:i.veskovic92@gmail.com">i.veskovic92@gmail.com</a> or with the following form
                        </p>
                        <form noValidate className='form'>
                            <div className="form__input form__input--name">
                                <input type="text" name='name' placeholder='First & Last name' />
                            </div>
                            <div className="form__input form__input--email">
                                <input type="email" name='email' placeholder='First & Last name' />
                            </div>
                            <div className="form__input form__input--text">
                                <textarea name="message" placeholder='Please enter yout message'></textarea>
                            </div>
                        </form>
                        <div className="contact-social">
                            <SocialItem link="#" imgSrc={contactMobile} altText="Contact Mobile" />
                            <SocialItem link="#" imgSrc={contactGithub} altText="Contact GitHub" />
                            <SocialItem link="#" imgSrc={contactLinkedin} altText="Contact Linkedin" />
                            <SocialItem link="#" imgSrc={contactMail} altText="Contact Mail" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
