import { styles } from './Dropdown.style';
import React from 'react'
import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const Dropdown = ({ label, items, value, setValue, placeholder }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <View style={styles.wrapper}>
            <Text>{label}</Text>
            <DropDownPicker
                placeholder={placeholder}
                open={isOpen}
                setOpen={setIsOpen}
                value={value}
                setValue={setValue}
                items={items}
                style={styles.dropdown}
                placeholderStyle={styles.dropdownPlaceholder}
                textStyle={styles.dropdownLabel}
                dropDownContainerStyle={styles.dropdownContainer}
            />
        </View>
    )
}

export default Dropdown
