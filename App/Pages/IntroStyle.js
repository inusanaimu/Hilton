import { StyleSheet,  Dimensions } from "react-native";
import { COLORS, SIZES, } from '../constant'

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: SIZES.xxLarge,
        backgroundColor: COLORS.white,
    },
    textContainer: {
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        marginTop: SIZES.xxLarge,
        
        
    },
    
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',
        padding: SIZES.large,
        
    },
    slide:{
        flex: 1,
    } 


})