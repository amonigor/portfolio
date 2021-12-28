export default {
  // Regular fade
  fadeFast: {
    opacity: [0, 1],
    duration: 8000
  },
  fadeSlow: {
    opacity: [0, 1],
    duration: 50000
  },

  // Slide fade from left
  slideLeftBounceFast: {
    opacity: [0, 1],
    duration: 1000,
    translateX: [-50, 0],
    autoplay: true
  },
  slideLeftBounceSlow: {
    opacity: [0, 1],
    duration: 8000,
    translateX: [-50, 0]
  },
  slideLeftLinearFast: {
    opacity: [0, 1],
    duration: 500,
    translateX: [-50, 0],
    easing: 'linear'
  },
  slideLeftLinearSlow: {
    opacity: [0, 1],
    duration: 1500,
    translateX: [-50, 0],
    easing: 'linear'
  },

  // Slide fade from left
  slideRightBounceFast: {
    opacity: [0, 1],
    duration: 1000,
    translateX: [50, 0]
  },
  slideRightBounceSlow: {
    opacity: [0, 1],
    duration: 8000,
    translateX: [50, 0]
  },
  slideRightLinearFast: {
    opacity: [0, 1],
    duration: 500,
    translateX: [50, 0],
    easing: 'linear'
  },
  slideRightLinearSlow: {
    opacity: [0, 1],
    duration: 1500,
    translateX: [50, 0],
    easing: 'linear'
  },

  // Slide fade from top
  slideTopBounceFast: {
    opacity: [0, 1],
    duration: 1000,
    translateY: [-50, 0]
  },
  slideTopBounceSlow: {
    opacity: [0, 1],
    duration: 8000,
    translateY: [-50, 0]
  },
  slideTopLinearFast: {
    opacity: [0, 1],
    duration: 500,
    translateY: [-50, 0],
    easing: 'linear'
  },
  slideTopLinearSlow: {
    opacity: [0, 1],
    duration: 1500,
    translateY: [-50, 0],
    easing: 'linear'
  },

  // Slide fade from bottom
  slideBottomBounceFast: {
    opacity: [0, 1],
    duration: 1000,
    translateY: [50, 0]
  },
  slideBottomBounceSlow: {
    opacity: [0, 1],
    duration: 8000,
    translateY: [50, 0]
  },
  slideBottomLinearFast: {
    opacity: [0, 1],
    duration: 500,
    translateY: [50, 0],
    easing: 'linear'
  },
  slideBottomLinearSlow: {
    opacity: [0, 1],
    duration: 1500,
    translateY: [50, 0],
    easing: 'linear'
  },
}