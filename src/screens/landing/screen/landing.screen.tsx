import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import Container from "@shared/components/container/container.component";
import TextComponent from "@/shared/components/text/text.component";
import ButtonComponent from "@/shared/components/button/button.component";
import WelcomeText from "../components/welcome-text/welcome-text.component";
import TopLayerComponent from "../components/top-layer/top-layer.component";

const LandingScreen = () => {
  return (
    <Container isSafeAreaView className="gap-10 px-horizontal py-4">
      <Container className="gap-14">
        <TopLayerComponent />
        <View className="gap-4">
          <WelcomeText />
          <TextComponent className="text-4xl font-bold">
            Manage your finances effortlessly with our intuitive app.
          </TextComponent>
          <TextComponent className="opacity-60">
            Open an account from the comfort of your home, and experience
            smooth, hassle-free transactions.
          </TextComponent>
        </View>
      </Container>
      <ButtonComponent>Get Started</ButtonComponent>
    </Container>
  );
};

export default memo(LandingScreen);

const styles = StyleSheet.create({});
