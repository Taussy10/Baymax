import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React, { FC } from 'react';
import { Fonts } from '../../utils/Constants';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Constants';

interface Props {
    variant?:
    "h1" |
    // | is union sign that till H1 to H9 all are in union then if not H1 to H9 then 
    // it will show body text
    "h2" |
    "h3" |
    "h4" |
    "h5" |
    "h6" |
    "h7" |
    "h8" |
    "h9" |
    "body";
    // body means pargarph(P1) text
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
    // Rest operator cause it is use in function if in object literal then will be  known
    // as spread operator 
    // convert all other into [variant , fontFamily ....]
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
                       // we have put the hardcore value of color so it can't change

                        fontSize: fontSize, // Use final font size

                        // fontSize: computedFontSize, // by using computed size it taking default value 
                        // not hardcore value so it can change

                        fontFamily: fontFamily,
                        // not hardcore value so it can change

                    },
                    style
                    // for new style that will be overwritten because or prefrence
                ]}
                numberOfLines={numberOfLines}
                {...props}
            >
                {children}
            </Text>
        </View>
    );
}

// Priority order in styles(Prefrence)
// 1.External styles
// 2. Inline
// 3. Props one 
// 4. Default styles that has been done by React Native

export default CustomText;

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    }
});
