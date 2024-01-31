import { zodResolver } from '@hookform/resolvers/zod';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';

z.setErrorMap((issue, ctx) => {
  if (issue.code === 'too_small') {
    if (issue.type === 'date') {
      return {
        message: `${new Date(issue.minimum as number).toLocaleString('ja')}以降の日付を選択してください。`,
      };
    }
    if (issue.type === 'string') {
      return {
        message: `${issue.minimum}文字以上で入力してください。`,
      };
    }
  }

  return { message: ctx.defaultError };
});

const schema = z.object({
  name: z.string().min(1),
  birthdate: z
    .date()
    .min(new Date('2024-01-01'))
    .max(new Date('2024-02-10'), { message: '2024-02-10以前の日付を選択してください。' }),
});

type schemaType = z.infer<typeof schema>;

export default function App() {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, defaultValues },
    getValues,
  } = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      birthdate: new Date(),
    },
  });

  const onSubmit = handleSubmit(({ birthdate, name }) => {
    Alert.alert('submitted', `birthdate: ${birthdate} / name: ${name}`);
  });

  return (
    <View style={styles.container}>
      <Text>index Page</Text>
      <Link href="/about">go to about</Link>
      <StatusBar style="auto" />
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="名前"
            style={{
              borderBottomWidth: 1,
              width: 200,
              height: 48,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Text style={{ color: 'red' }}>{errors.name?.message}</Text>
      <View style={{ height: 12 }} />
      {showDatePicker && (
        <Controller
          name="birthdate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              value={value || defaultValues?.birthdate}
              onChange={(_, selectedDate) => {
                onChange(selectedDate);
                setShowDatePicker(false);
              }}
              mode="date"
              minimumDate={new Date('2023-12-01')}
              maximumDate={new Date('2024-02-28')}
            />
          )}
        />
      )}
      <TouchableOpacity
        style={{
          width: 200,
          height: 48,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setShowDatePicker(true);
        }}>
        <View
          style={{
            width: '100%',
            paddingLeft: 10,
          }}>
          <Text style={{ color: 'gray' }}>生年月日</Text>
        </View>
        <Text>{getValues('birthdate').toLocaleDateString('ja')}</Text>
      </TouchableOpacity>
      <Text style={{ color: 'red' }}>{errors.birthdate?.message}</Text>
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
