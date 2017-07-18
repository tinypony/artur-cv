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
  margins: {left: 50, right: 50, top: 50, bottom: 50},
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
    this.createLanguagesChart(language_data)
  }

  componentDidUpdate() {
    this.createLanguagesChart(language_data)
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

  createLanguagesChart(data) {
    const node = this.node
    const dataMax = _.chain(data)
      .map(d => d.experience)
      .max()
      .value();

    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, chartProperties.height - chartProperties.margins.top - chartProperties.margins.bottom]);

    let bars = select(node)
      .selectAll('g')
      .data(data)
      .enter().append('g')
        .attr("transform", (d, i) => {
          const translateX = i * (this.props.barWidth + this.props.barGap) + chartProperties.margins.left
          const translateY = chartProperties.height - chartProperties.margins.bottom - yScale(d.experience)
          return `translate(${translateX}, ${translateY})`
        })

    bars.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .style('fill', 'steelblue')
      .attr("width", this.props.barWidth)
      .attr('height', d => yScale(d.experience))

    bars.append('text')
      .attr("x", this.props.barWidth/2 )
      .attr("y", d => yScale(d.experience))
      .attr("dy", "1.3em")
      .attr('class', 'language-chart_label')
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
  barGap: PropTypes.number
}

LanguageSkillChart.defaultProps = {
  className: CLASSNAMES.CONTAINER,
  barWidth: 80,
  barGap: 20
}
