const colorPalette = {
  blueBase: {
    SeaBlue: "#006992",
    CyanCornflowerBlue: "#2282A4",
    Moonstone: "#459BB7",
    MoonstoneBlue: "#67B3C9",
    DarkSkyBlue: "#8ACCDC",
    BlizzardBlue: "#ACE5EE",
    greyDarken4: "#212121",
    grey: "#9E9E9E",
    white: "#fff",
    lightYellow: "#FFFDE7"
  },
  alert: {
    warningBorder: "#E70E02",
    warningBackground: "#FECDC2",
    infomationBorder: "#7EA2B4",
    infomationBackground: "#B8DBD9",
  }
}

const theme = {
  colorStandard: {
    base: colorPalette.blueBase.white,
    main: colorPalette.blueBase.SeaBlue,
    accent: '#006992',
    sub: colorPalette.blueBase.CyanCornflowerBlue,
    semi: colorPalette.blueBase.Moonstone,
    para: colorPalette.blueBase.BlizzardBlue,
    darker: colorPalette.blueBase.grey,
    brighter: colorPalette.blueBase.lightYellow,
    letter: colorPalette.blueBase.greyDarken4,
    alert: {
      warningBorder: colorPalette.alert.warningBorder,
      warningBackground: colorPalette.alert.warningBackground,
      infomationBorder: colorPalette.alert.infomationBorder,
      infomationBackground: colorPalette.alert.infomationBackground,
    }
  },
  size: {
    sp: {
      font: 16
    },
    tab: {
      font: 16
    },
    pc: {
      font: 16
    },
  }
};


export default theme