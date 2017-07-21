import React from 'react'
import {BarChart} from 'react-d3-basic'
import { scaleLinear } from 'd3-scale'
import { select } from 'd3-selection'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './languages.scss'
import _ from 'lodash'

const CLASSNAMES = {
  CONTAINER: 'languages-wrapper'
}

const MINIMUM_MOBILE_BAR_LENGTH = 50
const MOBILE_BAR_LABEL_CLEARANCE = 5


const language_data = [
  {
    name: "Java",
    experience: 70,
    comment: "My first programming language",
    index: 0
  },
  {
    name: "JS",
    experience: 90,
    comment: "My language of choice to build quick back-end and front-end prototypes including Master's Thesis prototype",
    index: 1
  },
  {
    name: "Python",
    experience: 70,
    comment: "My pick for easy and elegant generation of mock data or manipulation of text files when I don't want to write bash scripts",
    index: 2
  },
  {
    name: "C",
    experience: 60,
    comment: "I don't panic when I hear about pointers and memory allocation.",
    index: 3
  },
  {
    name: "Bash",
    experience: 60,
    comment: "One of the things you just have to know",
    index: 4
  },
  {
    name: "PLSQL",
    experience: 10,
    comment: "Back in my student years I implementet Dijkstra's algorithm in PLSQL. It was a good good day.",
    index: 5
  },
  {
    name: "Assembly",
    experience: 10,
    comment: "Once implemented a pseudorandom number generator and a Chi-squared test to demostrate correct statistical distribution. It was the pinnacle of my programming career.",
    index: 6
  }
];

const x = (d) => d.name

const chartProperties = {
  width: _.min([650, window.innerWidth]),
  height: 300,
  title: "Language skills",
  xScale: 'ordinal',
  showLegend: false,
  chartSeries: [
    {
      field: 'experience',
      name: 'Experience'
    }
  ]
}

export default class LanguageSkillChart extends React.Component {
  constructor(props) {
    super(props);
    this.createLanguagesChart = this.createLanguagesChart.bind(this);
  }

  componentDidMount() {
    this.createLanguagesChart(language_data, this.props.isMobile)
  }

  componentDidUpdate() {
    const zeroedData = _.each(language_data, d => {
      const newD = Object.assign({}, d)
      newD.experience = 0
      return newD;
    })

    this.createLanguagesChart(zeroedData, this.props.isMobile)
    this.createLanguagesChart(language_data, this.props.isMobile)
  }

  getDataMaxValue(data) {
    return _.chain(data)
      .map(d => d.experience)
      .max()
      .value();
  }

  getDataMinValue(data) {
    return _.chain(data)
      .map(d => d.experience)
      .min()
      .value();
  }

  getScale(data, isMobile) {
    const cp = chartProperties
    const dataMax = _.chain(data)
      .map(d => d.experience)
      .max()
      .value();

    let rangeMax;

    if(isMobile) {
      rangeMax = cp.width - this.props.margins.left - this.props.margins.right
    } else {
      rangeMax = cp.height - this.props.margins.top - this.props.margins.bottom
    }

    return scaleLinear()
      .domain([0, dataMax])
      .range([0, rangeMax])
  }

  getBarTranslate(d, i, scale, isMobile) {
    let translateX, translateY;
    if(!isMobile) {
      translateX = i * (this.props.barWidth + this.props.barGap) + this.props.margins.left
      translateY = chartProperties.height - this.props.margins.bottom - scale(d.experience)
    } else {
      translateX = this.props.margins.left;
      translateY = i * (this.props.barWidth + this.props.barGap) + this.props.margins.top
    }
    return `translate(${translateX}, ${translateY})`
  }

  getBarWidth(d, scale, isMobile) {
    if(isMobile) {
      return scale(d.experience)
    } else{
      return this.props.barWidth
    }
  }

  getLabelX(d, scale, isMobile) {
    if (!isMobile) {
      return this.props.barWidth/2
    } else {
      if ( this.isLabelOverflown(d, scale) ) {
        return scale(d.experience) + MOBILE_BAR_LABEL_CLEARANCE
      } else {
        return scale(d.experience) - MOBILE_BAR_LABEL_CLEARANCE
      }
    }
  }

 isLabelOverflown(d, scale) {
   return scale(d.experience) < MINIMUM_MOBILE_BAR_LENGTH
 }

 getLabelY(d, scale, isMobile) {
   if(!isMobile) {
     return scale(d.experience)
   } else {
     return -1
   }
 }

 getLabelClass(d, scale, isMobile) {
   const defaultClass = 'language-chart_label'

   if(!isMobile) {
     return classNames(defaultClass, 'normal-orientation')
   } else {
     const defaultMobileClass = classNames(defaultClass, 'mobile-orientation')

     if(this.isLabelOverflown(d, scale)) {
       return classNames(defaultClass, 'mobile-orientation', 'overflown')
     } else {
       return defaultMobileClass
     }
   }
 }

  createLanguagesChart(data, isMobile) {
    const node = this.node

    const scale = this.getScale(data, isMobile)

    let bars = select(node)
      .selectAll('g')
      .data(data)
      .enter().append('g')
        .attr("transform", (d, i) => this.getBarTranslate(d, i, scale, isMobile))

    bars.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .style('fill', 'steelblue')
      .attr('width', d => this.getBarWidth(d, scale, isMobile))
      .attr('height', d => this.getBarWidth(d, scale, !isMobile))

    bars.append('text')
      .attr("x", d => this.getLabelX(d, scale, isMobile))
      .attr("y", d => this.getLabelY(d, scale, isMobile))
      .attr("dy", "1.3em")
      .attr('class', d => this.getLabelClass(d, scale, isMobile))
      .text(d => d.name)

    bars.exit()
      .remove()
  }

  render() {
    return <svg className={this.props.className} ref={node => this.node = node}
      width={chartProperties.width} height={chartProperties.height}
    />;
  }
}

LanguageSkillChart.propTypes = {
  className: PropTypes.string,
  barWidth: PropTypes.number,
  barGap: PropTypes.number,
  isMobile: PropTypes.bool,
  margins: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number
  })
}

LanguageSkillChart.defaultProps = {
  className: CLASSNAMES.CONTAINER,
  barWidth: 80,
  barGap: 20,
  isMobile: true,
  margins: {
    left: 50,
    right: 50,
    top: 50,
    bottom: 50
  }
}
