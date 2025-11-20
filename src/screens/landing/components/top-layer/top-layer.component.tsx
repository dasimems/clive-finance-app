import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ContainerComponent from "@/shared/components/container/container.component";
import LayerOneComponent from "./layer-one/layer-one.component";
import LayerTwoComponent from "./layer-two/layer-two.component";
import LayerThreeComponent from "./layer-three/layer-three.component";
import LayerFourComponent from "./layer-four/layer-four.component";

const TopLayerComponent = () => {
  return (
    <ContainerComponent className="w-full gap-4 flex-row items-stretch justify-between">
      <LayerOneComponent />
      <LayerTwoComponent />
      <LayerThreeComponent />
      <LayerFourComponent />
    </ContainerComponent>
  );
};

export default memo(TopLayerComponent);

const styles = StyleSheet.create({});
