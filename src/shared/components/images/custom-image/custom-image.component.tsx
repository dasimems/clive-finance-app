import { ImageStyle, StyleProp, View } from "react-native";
import React, { forwardRef, memo, useState } from "react";
import { Image, ImageProps } from "expo-image";
import { cn } from "@/shared/utils/classnames";
import { DefaultImage } from "@/assets/images";

type TCustomImageProps = {
  imageClassName?: string;
  imageStyle?: StyleProp<ImageStyle>;
} & ImageProps;

const CustomImage = forwardRef<
  React.ComponentRef<typeof Image>,
  TCustomImageProps
>(
  (
    {
      imageClassName,
      onError = () => {},
      onLoadEnd = () => {},
      placeholder,
      contentFit,
      source,
      className,
      style,
      imageStyle,
      ...props
    },
    ref
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hasLoadError, setHasLoadError] = useState(false);
    return (
      <View
        style={style}
        className={cn("relative size-28 overflow-hidden", className)}
      >
        <Image
          ref={ref}
          style={imageStyle}
          className={cn("size-full", imageClassName)}
          source={source || DefaultImage}
          onError={(e) => {
            setHasLoadError(true);
            onError(e);
          }}
          contentFit={source ? contentFit : "cover"}
          placeholderContentFit="cover"
          placeholder={placeholder || DefaultImage}
          onLoadEnd={() => {
            setImageLoaded(true);
            onLoadEnd();
          }}
          {...props}
        />
        {(!imageLoaded || hasLoadError) && (
          <View className="absolute inset-0">
            {!imageLoaded && (
              <View className="flex-1 size-full">
                <Image
                  source={DefaultImage}
                  contentFit="cover"
                  contentPosition={"center"}
                  className="size-full"
                />
              </View>
            )}
            {hasLoadError && (
              <View className="flex-1 size-full">
                <Image
                  source={DefaultImage}
                  contentFit="cover"
                  contentPosition={"center"}
                  className="size-full"
                />
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
);

CustomImage.displayName = "Custom image";

export default memo(CustomImage);
