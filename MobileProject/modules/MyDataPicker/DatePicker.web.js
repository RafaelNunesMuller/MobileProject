// components/MyDatePicker/DatePicker.web.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Usamos Text e View do RN para consistência no JSX, mas o renderizador web os transforma em divs/spans

const DatePickerWeb = ({ date, setDate, label = "Data" }) => {
  const handleDateChange = (event) => {
    // `event.target.value` virá como uma string 'YYYY-MM-DD'
    if (event.target.value) {
      // Ajusta para o fuso horário local para evitar problemas de data
      const [year, month, day] = event.target.value.split('-').map(Number);
      const selectedDate = new Date(year, month - 1, day); // month - 1 porque os meses em JS são 0-indexados
      setDate(selectedDate);
    } else {
      setDate(null); // Caso o campo seja limpo
    }
  };

  // Formata a data para 'YYYY-MM-DD' para o input type="date"
  const formattedDate = date ? date.toISOString().split('T')[0] : '';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <input
        type="date"
        value={formattedDate}
        onChange={handleDateChange}
        style={styles.input}
      />
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
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    width: '100%', // Para ocupar a largura total do container
    boxSizing: 'border-box', // Garante que padding e border sejam incluídos na largura total
  },
});

export default DatePickerWeb;