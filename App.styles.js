import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  root: {
    padding: 40,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 20,
    fontSize: 18,
  },
  preview: {
    borderWidth: 0.5,
    borderColor: '#d3d3d3',
    borderRadius: 5,
  },
  bold: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    fontWeight: 'normal',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    padding: 10,
    flexDirection: 'row',
  },
})

export default styles
