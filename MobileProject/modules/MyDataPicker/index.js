// components/MyDatePicker/index.js
import { Platform } from 'react-native';

let DatePicker;


// Importa a implementação específica da plataforma
if (Platform.OS === 'web') {
  DatePicker = require('./DatePicker.web').default;
} else {
  DatePicker = require('./DatePicker.native').default;
}

export default DatePicker;