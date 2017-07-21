import React from 'react'
import PropTypes from 'prop-types'
import {scaleLinear, scaleOrdinal} from 'd3-scale'
import {schemeSet2 as colorScheme} from 'd3-scale-chromatic'
import {hierarchy, pack} from 'd3-hierarchy'
import {precisionRound as format} from 'd3-format'
import { select } from 'd3-selection'
import _ from 'lodash'
import './technologies.scss'

import './languages.scss'

const BUBBLE_OFFSET_Y = 60

const technology_data = [
  {
    name: "AWS",
    experience: 80,
    comment: "Daily used",
    category: "cloud"
  },
  {
    name: "OpenStack",
    experience: 70,
    comment: "Used extensively for my Master's Thesis",
    category: "cloud"
  },
  {
    name: "Kafka",
    experience: 70,
    comment: "Used extensively for my Master's Thesis",
    category: "streaming"
  },
  {
    name: "React.JS",
    experience: 100,
    comment: "Actively used at my work to develop production grade code. Also this page",
    category: "ui"
  },
  {
    name: "Redux",
    experience: 90,
    comment: "Actively used at my work to develop production grade code",
    category: "ui"
  },
  {
    name: "NodeJS",
    experience: 100,
    comment: "Used everywehere",
    category: "server & db"
  },
  {
    name: "Express",
    experience: 80,
    comment: "Used with confidence in small personal projects and prototypes",
    category: "server & db"
  },
  {
    name: "NoSQL",
    experience: 80,
    comment: "The type of databases actively used by myself at work and my personal projects",
    category: "server & db"
  },
  {
    name: "Backbone.JS",
    experience: 90,
    comment: "One of the first JS frameworks used at work. Almost forgotten and rightfully so",
    category: "ui"
  },
  {
    name: "Django",
    experience: 50,
    comment: "Only used in small personal and university projects",
    category: "server & db"
  }
];

const x = (d) => d.name


const chartProperties = {
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

export default class TechSkills extends React.Component {

  constructor(props) {
    super(props);
    this.createTechnologyChart = this.createTechnologyChart.bind(this);
  }

  componentDidMount() {
    this.createTechnologyBubbleChart()
  }

  componentDidUpdate() {
    this.createTechnologyBubbleChart()
  }

  getDataMaxValue() {
    return _.chain(technology_data)
      .map(d => d.experience)
      .max()
      .value();
  }

  getDataMinValue() {
    return _.chain(technology_data)
      .map(d => d.experience)
      .min()
      .value();
  }

  createLegend(categories, color) {
    let legendEntry = select(this.node).selectAll('.legend_entry')
      .data(categories)
    .enter()
      .append('g')
      .attr('class', 'legend_entry')
      .attr('transform', (d, i) => {
        const x = i % 2
        const y = Math.floor(i / 2)
        let translateX = chartProperties.margins.left + x * 140
        let translateY = 50 + y * 30
        return `translate(${translateX}, ${translateY})`
      })

    legendEntry.append('rect')
      .attr("width", 15)
      .attr('height', 15)
      .attr('fill', d => color(d))

    legendEntry.append('text')
      .attr('dy', '12')
      .attr('dx', '20')
      .attr('class', 'legend-text')
      .text(d => d)
  }

  getUniqueCategories(data) {
    const categories = _.map(data, d => d.category)
    const unique = _.filter(categories, (v, i, a) => a.indexOf(v) === i)
    return unique
  }

  createTechnologyBubbleChart() {
    let scaleRadius = scaleLinear()
      .domain([20, this.getDataMaxValue()])
      .range([5, 50])

    let color = scaleOrdinal(colorScheme)
    let bubble = pack().size([this.props.width, this.props.height]).padding(1.5)

    let flattened = _.map(technology_data, d => {
      return {packageName: null, className: d.name, category: d.category, value: d.experience}
    });

    let root = hierarchy({children: flattened})
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value)

    bubble(root);

    let node = select(this.node).selectAll('.node')
      .data(root.children)
    .enter()
      .append('g')
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x}, ${d.y + BUBBLE_OFFSET_Y})` )

    node.append('circle')
      .attr('r', d => d.r)
      .style('fill', d => color(d.data.category))

    node.append('text')
      .attr('dy', ".3em")
      .attr('class', 'bubble-text')
      .style('text-anchor', 'middle')
      .text(d => d.data.className.substring(0, d.r / 3) )

    this.createLegend(this.getUniqueCategories(technology_data), color)
  }

  createTechnologyChart() {
    const node = this.node
    const dataMax = _.chain(technology_data)
      .map(d => d.experience)
      .max()
      .value();

    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.height]);

    select(node)
      .selectAll('rect')
      .data(technology_data)
      .enter()
      .append('rect')

    select(node)
      .selectAll('rect')
      .data(technology_data)
      .exit()
      .remove()

    select(node)
      .selectAll('rect')
      .data(technology_data)
      .style('fill', '#1f77b4')
      .attr('x', (d, i) => i * 30 + 60)
      .attr('y', d => this.props.height - yScale(d.experience))
      .attr('height', d => yScale(d.experience))
      .attr('width', 25)
  }

  render() {
    return <svg className="technologies-svg" ref={node => this.node = node}
      width={this.props.width} height={this.props.height}
    />
  }
}

TechSkills.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  isMobile: PropTypes.bool
}

TechSkills.defaultProps = {
  height: 560,
  width: 700
}
