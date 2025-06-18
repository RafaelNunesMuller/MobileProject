// components/MyDatePicker/DatePicker.native.js

//não sera ultilizado no momento, mas pode ser usado futuramente



import React, { useState } from 'react';
import { View, Button, Platform, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerNative = ({ date, setDate, label = "Data" }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Fecha o picker em iOS após a seleção
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Button onPress={showDatePicker} title="Escolher Data" />

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'} // 'spinner' para iOS, 'default' para Android
          onChange={onChange}
        />
      )}
      {/* Exibindo a data selecionada no próprio componente para feedback */}
      <Text style={styles.selectedDateText}>
        {date ? `Data Selecionada: ${date.toLocaleDateString('pt-BR')}` : 'Nenhuma data selecionada'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  selectedDateText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});

export default DatePickerNative;