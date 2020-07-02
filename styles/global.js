import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  layout: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 32,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
  },
  introHeading: {
    marginTop: 40
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'raleway-regular',
    textAlign: 'center',
    marginTop: 25,
    lineHeight: 24,
    paddingHorizontal: 15
  },
  btn: {
    width: '76%',
    marginHorizontal: '12%',
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
    height: 50
  }, 
    btnText: {
    fontSize: 14,
    fontFamily: 'raleway-bold',
    letterSpacing: .7,
    textTransform: 'uppercase',
    color: '#fff'
  }
});