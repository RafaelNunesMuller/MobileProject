// screens/CreateConsultationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Platform } from 'react-native';
import MyDatePicker from '../modules/MyDataPicker';

const CreateConsultationScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [consultationDate, setConsultationDate] = useState(new Date()); // Começa com a data atual
  const [consultationTime, setConsultationTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleCreateConsultation = () => {
    // Validar dados
    if (!patientName || !doctorName || !consultationDate || !consultationTime) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios (Nome do Paciente, Nome do Médico, Data, Hora).');
      return;
    }

    // Formatar a data e hora para exibição ou envio
    const formattedDate = consultationDate.toLocaleDateString('pt-BR');
    const consultationDetails = {
      patient: patientName,
      doctor: doctorName,
      date: formattedDate,
      time: consultationTime,
      notes: notes,
    };

    console.log('Detalhes da Consulta:', consultationDetails);
    Alert.alert(
      'Consulta Agendada!',
      `Paciente: ${patientName}\nMédico: ${doctorName}\nData: ${formattedDate}\nHora: ${consultationTime}\nNotas: ${notes || 'N/A'}`
    );

    // Limpar formulário
    setPatientName('');
    setDoctorName('');
    setConsultationDate(new Date());
    setConsultationTime('');
    setNotes('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agendar Nova Consulta</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome do Paciente:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do paciente"
          value={patientName}
          onChangeText={setPatientName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome do Médico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do médico"
          value={doctorName}
          onChangeText={setDoctorName}
        />
      </View>

      {/* Usando o MyDatePicker que se adapta à plataforma */}
      <View style={styles.inputGroup}>
        <MyDatePicker
          label="Data da Consulta"
          date={consultationDate}
          setDate={setConsultationDate}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hora da Consulta:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 14:30"
          value={consultationTime}
          onChangeText={setConsultationTime}
          keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'default'} // Ajuste para o teclado em iOS
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observações (opcional):</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Detalhes adicionais da consulta"
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />
      </View>

      <Button
        title="Agendar Consulta"
        onPress={handleCreateConsultation}
        color="#007bff"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top', // Para Android
  },
});

export default CreateConsultationScreen;