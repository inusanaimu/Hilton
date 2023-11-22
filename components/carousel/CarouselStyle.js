import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { COLORS, icons, image, SIZES, FONT } from '../../../constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width: Dimensions.get("window").width,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: COLORS.gray,
    marginHorizontal: 4,
   
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  },
});