
export const baseColors = {

  //Primary app colors
  primaryLightColor : '#009FDF',
  primaryDarkColor : '#009FDF',

  //primaryBackground
  primaryBackgroundLight : 'white',
  primaryBackgroundDark  : 'black',

  //backgroundCards
  backgroundCardsLight : '#F6F6F7',
  backgroundCardsDark  : '#343F48',

  //Color icons
  lightIconColor : '#979899',
  darkIconColor : '#000000',

  //TextColor
  lightTextColor : '#000000',
  darkTextColor : '#F5F6F6',

  //Gray TextColor
  grayTextColor : '#707070',

}

export default {
  light : {
    primary : baseColors.primaryLightColor,
    background : baseColors.primaryBackgroundLight,
    backgroundCardsColor : baseColors.backgroundCardsLight,
    icons : baseColors.lightIconColor,
    text : baseColors.lightTextColor,
    grayTextColor : baseColors.grayTextColor
  },
  dark : {
    primary : baseColors.primaryDarkColor,
    background : baseColors.primaryBackgroundDark,
    backgroundCardsColor : baseColors.backgroundCardsDark,
    icons : baseColors.darkIconColor,
    grayTextColor : baseColors.grayTextColor
  }
}
