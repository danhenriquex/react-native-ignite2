import { StatusBar } from "react-native";
import OneSignal from "react-native-onesignal";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";
import { tagUserEmailCreate } from "./src/notifications/notificationsTags";

import { CartContextProvider } from "./src/contexts/CartContext";

OneSignal.setAppId("01a73b9c-0863-4c31-a449-fd223ebbf955");

OneSignal.setEmail("danilo@email.com");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate("danilo@email.com");

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
