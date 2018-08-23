import React, {PureComponent} from 'react'
import styled from 'styled-components'
import Canvas from './components/canvas/Canvas.react'
import Section from './components/section/Section.react'
import HeaderSection from './HeaderSection.react'
import SkillSection from './SkillSection.react'
import EducationSection from './EducationSection.react'
import ExperienceSection from './ExperienceSection.react'
import './styles.scss'


export default class App extends PureComponent {
  render() {
    return <Canvas>
      <HeaderSection />
      <SkillSection />
      <EducationSection />
      <ExperienceSection />
    </Canvas>
  }
}
