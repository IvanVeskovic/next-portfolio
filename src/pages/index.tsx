import { Inter } from 'next/font/google'
import Navigation from '@/sections/navigation/Navigation';
import Banner from '@/sections/banner/Banner';
import Services from '@/sections/services/Services';
import RecentWork from '@/sections/works/RecentWorks';
import Skills from '@/sections/skills/Skills';
import SectionDivider from '@/sections/divider/SectionDivider';
import Experience from '@/sections/experience/Experience';
import ProjectApproach from '@/sections/approach/ProjectApproach';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <RecentWork />
      <SectionDivider />
      <Skills />
      <Experience />
      <ProjectApproach />
    </div>
  )
}
