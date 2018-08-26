export default {
  mobile: '@media (max-width: 350px)',
  phablet: '@media (min-width: 351, max-width: 500px)',
  tablet: '@media (min-width: 768px, max-width: 1023px)',
  desktop: '@media (min-width: 1024px)',
  upTo: {
    tablet: '@media (max-width: 767px)',
    desktop: '@media (max-width: 1023px)'
  },
  from: {
    phablet: '@media (min-width: 351px)',
    tablet: '@media (min-width: 768px)'
  }
}
