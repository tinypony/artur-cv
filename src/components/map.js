import {default as React, Component} from 'react'
import _ from 'lodash'
import HelsinkiImage from '../../styles/img/helsinki.png'
import './map.scss'

const LOCATION_WINDOW_EDGE_LENGTH = 400
const IMAGE_EDGE_LENGTH = 838
const SCALE_FACTOR = 10

const getCenterOffset = () => IMAGE_EDGE_LENGTH - (IMAGE_EDGE_LENGTH - LOCATION_WINDOW_EDGE_LENGTH)/2


export default class Map extends Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      backgroundPositionX: getCenterOffset(),
      backgroundPositionY: getCenterOffset()
    }
  }

  handleMouseMove(event) {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const centerOffsetX = event.clientX - centerX
    const centerOffsetY = event.clientY - centerY

    this.setState({
      backgroundPositionX: getCenterOffset() - centerOffsetX/SCALE_FACTOR,
      backgroundPositionY: getCenterOffset() - centerOffsetY/SCALE_FACTOR
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    return <div className="where-section_map-wrapper">
      <div
        className="helsinki-image"
        style={{
          backgroundPositionX: this.state.backgroundPositionX,
          backgroundPositionY: this.state.backgroundPositionY
        }}
      ></div>
    </div>
  }
}
