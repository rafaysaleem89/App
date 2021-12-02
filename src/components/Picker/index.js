import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import styles from '../../styles/styles';
import * as pickerPropTypes from './pickerPropTypes';
import pickerStyles from './pickerStyles';

const Picker = props => (
    <RNPickerSelect
        onValueChange={props.onValueChange}
        items={props.items}
        style={props.size === 'normal' ? pickerStyles(props.disabled, props.error, props.focused) : styles.pickerSmall}
        useNativeAndroidPickerStyle={false}
        placeholder={props.placeholder}
        value={props.value}
        Icon={() => props.icon(props.size)}
        disabled={props.disabled}
        fixAndroidTouchableBug
        onOpen={props.onOpen}
        onClose={props.onClose}
        pickerProps={{
            onFocus: props.onOpen,
            onBlur: props.onClose,
        }}
    />
);


Picker.propTypes = pickerPropTypes.propTypes;
Picker.defaultProps = pickerPropTypes.defaultProps;
Picker.displayName = 'Picker';

export default Picker;
