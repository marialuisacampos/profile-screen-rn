import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/96178284?v=4';
const urlToGithub = 'https://github.com/marialuisacampos';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const response = await Linking.canOpenURL(urlToGithub);
    if (response) {
      console.log('Link verificado');
      console.log('Abrindo o link...');
      await Linking.openURL(urlToGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Maria Luisa sorrindo em um fundo branco"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="nome: Maria Luisa Campos"
          style={[style.defaultText, style.name]}>
          Maria Luisa Campos
        </Text>
        <Text
          accessibilityLabel="nome de usário: marialuisacampos"
          style={[style.defaultText, style.nickname]}>
          marialuisacampos
        </Text>
        <Text
          accessibilityLabel="descrição: Web Developer and Information Systems student at the UFRPE."
          style={[style.defaultText, style.description]}>
          Web Developer and Information Systems student at the UFRPE.
        </Text>
        <View style={style.button}>
          <Pressable onPress={handlePressGoToGithub}>
            <Text style={[style.defaultText, style.textButton]}>
              Open GitHub
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
