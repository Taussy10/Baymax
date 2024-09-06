import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React, { FC } from 'react';
import { Fonts } from '../../utils/Constants';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Constants';

interface Props {
    variant?:
    "h1" |
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6" |
    "h7" |
    "h8" |
    "h9" |
    "body";
    fontFamily?: Fonts;
    fontSize?: number;
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    numberOfLines?: number;
    onLayout?: (event: object) => void;
}

const CustomText: React.FC<Props> = ({
    variant = 'body',
    fontFamily = Fonts.Regular,
    fontSize, // Take fontSize prop
    style,
    children,
    numberOfLines,
    onLayout,
    ...props
}) => {
    // Calculate default fontSize based on variant
    let computedFontSize: number;

    switch (variant) {
        case 'h1':
            computedFontSize = moderateScale(22);
            break;
        case 'h2':
            computedFontSize = moderateScale(20);
            break;
        case 'h3':
            computedFontSize = moderateScale(18);
            break;
        case 'h4':
            computedFontSize = moderateScale(16);
            break;
        case 'h5':
            computedFontSize = moderateScale(14);
            break;
        case 'h6':
            computedFontSize = moderateScale(12);
            break;
        case 'h7':
            computedFontSize = moderateScale(11);
            break;
        case 'h8':
            computedFontSize = moderateScale(10);
            break;
        case 'h9':
            computedFontSize = moderateScale(9);
            break;
        default:
            computedFontSize = moderateScale(12); // Default body size
            break;
    }

    // Use the fontSize prop if provided, otherwise use the computed font size
    // const finalFontSize = fontSize !== undefined ? fontSize : computedFontSize;

    return (
        <View>
            <Text
                onLayout={onLayout}
                style={[
                    styles.text,
                    {
                        color: Colors.text,
                        fontSize: fontSize, // Use final font size
                        fontFamily: fontFamily,
                    },
                    style
                ]}
                numberOfLines={numberOfLines}
                {...props}
            >
                {children}
            </Text>
        </View>
    );
}

export default CustomText;

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    }
});
