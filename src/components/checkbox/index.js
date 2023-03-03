import React from "react";
import { TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Checkbox = ({ checked, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
        {checked ? (
            <View style={styles.innerContainer}>
                <Image style={styles.CheckIcon} source={require("../../assets/check.png")}/>
            </View>
        ) : null}
        </TouchableOpacity>
    )
}
export default Checkbox;