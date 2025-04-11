import React from "react";
import { showMessage } from "react-native-flash-message";

const RenderFlashMessage = (title, type) => {
    return showMessage({
        animated: true,
        floating: true,
        message: title,
        type: type,
        icon: 'auto',
        // hideOnPress
    });
}
export default RenderFlashMessage