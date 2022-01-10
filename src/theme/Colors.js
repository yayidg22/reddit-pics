const COLORS = {
  primary: "#FF5700",
  primaryOpacity: (color) => { return `rgba(255, 86, 0,${color || 0.50})` },  
  secondary: "#EFF7FF",
  secondaryOpacity: (color) => { return `rgba(239, 247, 255,${color || 0.50})` },
  tertiary: "#0079d3",
  tertiaryOpacity: (color) => { return `rgba(48, 101, 155,${color || 0.50})` },

  notificationSuccess:'#cee6d6',
  notificationWarning:'#ece6bb',
  notificationError:'#ff657a',

  //basics colors
  red: "red",
  error: "#c95159",
  success: "#00a000",
  warning:"#ffff00",
  white: '#ffffff',
  snow: '#f2f6ff',
  black: '#231f20',
  gray: "#58595b",
  grayPlaceholder: '#A9A9AC',
  lightGray: "#DCDCDC",
  fieldGray: "#E6EAEE",
}

export default COLORS
