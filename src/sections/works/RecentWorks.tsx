import SectionHeading from "@/components/heading/SectionHeading";
import RecentSingleWork from "./RecentSingleWork";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, EffectFade } from 'swiper';

import { currentWorks } from '../../data/data.json';

import 'swiper/css';
import 'swiper/css/navigation';


export default function RecentWork({ }) {
    const navigationPrevRef = useRef<HTMLDivElement>(null)
    const navigationNextRef = useRef<HTMLDivElement>(null)

    return (
        <section className="works">
            <div className="works__header">
                <SectionHeading title="Recent Work" />

                <div className="arrow-nav">
                    <div ref={navigationPrevRef} className="arrow-nav__prev">
                        {"<"}
                    </div>
                    <div ref={navigationNextRef} className="arrow-nav__next">
                        {">"}
                    </div>
                </div>
            </div>

            <div className="works__wrapper">
                <Swiper
                    modules={[Navigation, A11y, EffectFade]}
                    spaceBetween={100}
                    slidesPerView={3}
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
                        currentWorks.map(work => (
                            <SwiperSlide key={work.id}>
                                <RecentSingleWork title={work.title} imgSrc={work.imgSrc} description={work.description} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section >
    )
}