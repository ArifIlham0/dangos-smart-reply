import { Platform } from "react-native";

export const Fonts = {
  light: Platform.OS !== "ios" ? 'Inter_28pt-Light' : 'Inter 28pt Light',
  regular: Platform.OS !== "ios" ? 'Inter_28pt-Regular' : 'Inter 28pt Regular',
  medium: Platform.OS !== "ios" ? 'Inter_28pt-Medium' : 'Inter 28pt Medium',
  semiBold: Platform.OS !== "ios" ? 'Inter_28pt-SemiBold' : 'Inter 28pt SemiBold',
  bold: Platform.OS !== "ios" ? 'Inter_28pt-Bold' : 'Inter 28pt Bold',
  italic: Platform.OS !== "ios" ? 'Inter_28pt-Italic' : 'Inter 28pt Italic',
};
