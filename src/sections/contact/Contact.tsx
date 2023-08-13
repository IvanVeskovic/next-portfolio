import React from 'react';
import SectionHeading from '@/components/heading/SectionHeading';
import contactImage from '../../../public/images/contact-banner.jpg';
import contactMobile from '../../../public/images/social/mobile.svg';
import contactGithub from '../../../public/images/social/github.svg';
import contactLinkedin from '../../../public/images/social/linkendin.svg';
import contactMail from '../../../public/images/social/mail.svg';

import Image from 'next/image';
import SocialItem from '@/components/socialItem/SocialItem';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<any> = (someData: any) => console.log(errors);

    const errorMessages = {
        required: "Please fill in this field",
        patter: "Please enter valid email address",
        minLength: "Minimum number of characters is 20 characaters"
    }

    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <section className="contact" id="contact">
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
                        <form noValidate className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className={`form__input form__input--name ${errors.name?.message ? 'error' : ''}`}>
                                <input
                                    {...register("name", { required: { value: true, message: errorMessages.required } })}
                                    type="text"
                                    name='name'
                                    placeholder='First & Last name' />
                                <span className='form__input__error'>{errors.name?.message}</span>
                            </div>
                            <div className={`form__input form__input--email ${errors.email?.message ? 'error' : ''}`}>
                                <input
                                    {...register("email", { required: { value: true, message: errorMessages.required }, pattern: { value: emailPattern, message: errorMessages.patter } })}
                                    type="email"
                                    name='email'
                                    placeholder='Email' />
                                <span className='form__input__error'>{errors.email?.message}</span>
                            </div>
                            <div className={`form__input form__input--text ${errors.message?.message ? 'error' : ''}`}>
                                <textarea {...register("message", { required: { value: true, message: errorMessages.required }, minLength: { value: 20, message: `${errorMessages.minLength}` } })} name="message" placeholder='Please enter yout message'></textarea>
                                <span className='form__input__error'>{errors.message?.message}</span>
                            </div>
                            <input type='submit' value="Submit form" className='form__submit' />
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
