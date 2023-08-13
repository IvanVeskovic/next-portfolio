import Service from './Service';

export default function Services() {
    return (
        <section className="services" id="services">
            <Service title="developing" imgSrc="/images/info/coding-black.png" buttonText="Read More" buttonLink="#" buttonType="primary" text="Unleash your digital potential with expert website development. Craft dynamic, user-centric sites that captivate, elevate your brand, and optimize conversions. Our adept team blends creativity with cutting-edge tech for a tailored online presence that sets you apart. Let's build your online success story together" />

            <Service title="Creating UX / UI" imgSrc="/images/info/coding-black.png" buttonText="Read More" buttonLink="#" buttonType="primary" text="Transforming ideas into captivating reality. Our UI/UX design expertise crafts seamless, user-centered interfaces that resonate. Elevate your digital presence with intuitive designs that inspire action. Let's create an exceptional user journey that drives results." />

            <Service title="consulting" imgSrc="/images/info/coding-black.png" buttonText="Read More" buttonLink="#" buttonType="primary" text="Elevate your strategies with expert consultation. We provide tailored solutions that combine industry insights and innovative thinking. Enhance decision-making, refine processes, and achieve your goals with our top-tier expertise. Let's shape your path to success together." />
        </section>
    )
}