import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  PixelRatio,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, image, SIZES, FONT } from '../../constant';
import Logo from "../component/common/Logo/Logo";
import Carousel from "../component/common/carousel/Carousel";
import { data } from "../component/common/carousel/CarouselData";
import { styles } from "./IntroStyle";


const Intro = () => {
  const router = useRouter();
  const size = PixelRatio.getPixelSizeForLayoutSize(160);
  return (
    <SafeAreaView style={styles.body}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Logo />
      <Carousel>
        {data.map((item, index) => {
          return (
            <View style={styles.slide} key={index}>
              <Image
                source={item.images}
                style={{ resizeMode: "contain", width: size, height: size, alignSelf:'center' }}
              />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: 34,
                  }}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    padding: SIZES.medium,
                    color: "rgba(0, 0, 0, 0.4)",
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: FONT.regular,
                    textAlign: "center",
                    lineHeight: 20,
                  }}
                >
                  {item.message}
                </Text>
              </View>
            </View>
          );
        })}
      </Carousel>

      <View style={styles.footer}>
        <View>
          <TouchableOpacity>
            <Text onPress={() => router.replace("/create-profile")}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text onPress={() => router.replace("/create-profile")}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default Intro;