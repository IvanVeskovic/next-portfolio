import SectionHeading from "@/components/heading/SectionHeading";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, EffectFade } from 'swiper';

import data from '@/data/data.json';

import 'swiper/css';
import 'swiper/css/navigation';
import SingleSkill from "./SingleSkill";

export default function Skills() {
    const navigationPrevRef = useRef<HTMLDivElement>(null)
    const navigationNextRef = useRef<HTMLDivElement>(null)

    return (
        <section className="skills">
            <div className="skills__header">
                <SectionHeading title="Skills" />

                <div className="arrow-nav">
                    <div ref={navigationPrevRef} className="arrow-nav__prev">
                        {"<"}
                    </div>
                    <div ref={navigationNextRef} className="arrow-nav__next">
                        {">"}
                    </div>
                </div>
            </div>

            <div className="skills__wrapper">
                <Swiper
                    modules={[Navigation, A11y, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={6}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // eslint-disable-next-line no-param-reassign
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // eslint-disable-next-line no-param-reassign
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}

                >
                    {
                        data.skills.map(skill => (
                            <SwiperSlide key={skill.id}>
                                <SingleSkill title={skill.title} images={skill.imgSrcs} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}