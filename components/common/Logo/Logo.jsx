
import { View, Image } from "react-native";
import { COLORS, icons, image, SIZES, FONT } from '../../../constant'

import { styles } from "./LogoStyle";

const Logo = () => {

    return (
        <View
            style={styles.logo}>
            <Image
                source={image.logo}
                style={{ height: 120, width: 140 }}
            />
        </View>
    );
};


export default Logo;