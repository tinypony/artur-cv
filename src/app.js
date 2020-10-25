import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Section, PaperSheet } from './components'
import { HeaderSection } from './HeaderSection'
import { SkillSection } from './SkillSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import theme from './theme'
import './styles.css'


export const App = () => {
  return <ThemeProvider theme={theme}>
    <PaperSheet>
      <HeaderSection />
      <SkillSection />
      <EducationSection />
      <ExperienceSection />
    </PaperSheet>
  </ThemeProvider>
}
