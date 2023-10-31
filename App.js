import {Image } from 'react-native';
import styled from 'styled-components'
import { useState } from 'react';

const Header = styled.View `
    flex-direction: row;
    justify-content: center;
    background-color: #caf0f8;
    flex-wrap: wrap;
`;

const Quadrado = styled.View`
    background-color: ${props => props.cor};
    width: 400px;
    height: 150px;
    justify-content: center;
    align-items: center;
`;

const Retangulo = styled.View`
    background-color: ${props => props.cor};
    width: 300px;
    height: 150px;
    justify-content: center;
    align-items: center;
`;

const Pagina = styled.View`
  flex: 1;
  background-color: #caf0f8;
`;
const Titulo = styled.Text`
    color: ${props => props.cor};
    flex-direction: row;
    justify-content: center;
    font-weight: bold;
    font-size: 25;
    margin-top: 40px;
    background-color: #0077b6;
    width: 400px;
    height: 50px;
    text-align: center
`;
const SubTitulo = styled.Text`
    color: ${props => props.cor};
    flex-direction: row;
    justify-content: center;
    font-size: 20;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

const Descricao = styled.Text`
    color: ${props => props.cor};
    flex-direction: row;
    justify-content: center;
    font-size: 20;
    font-weight: bold;
    margin-top: 350px;
    text-align: center;
`;
const Botao = styled.TouchableOpacity`  
    background-color: #41aef4;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
`;
const TextoBotao = styled.Text`
    color: #FFF;
    font-size: 25px;
`;
const MensagemResultado = styled.Text`
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
`;

export default function App() {
  const [totalConsumo, setTotalConsumo] = useState(0);

  const addTotalConsumo = (value) => {
    setTotalConsumo(totalConsumo + value);
  };
  
  return (
    <Pagina>
      <Titulo cor='#ffff'>Água e Saúde</Titulo>
      <Header>
      <Quadrado>
      <Image source={{uri:'https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/nao-consegue-beber-agua-suficiente-confira-5-dicas-para-aumentar-a-sua-hidratacao/nao-consegue-beber-agua-suficiente-confira-5-dicas-para-aumentar-a-sua-hidratacao_1280x530px.png/@@images/9e619737-6fe5-45c2-b5ad-293a540fd08d.png'}}
        style={{width: 400, height: 150}}
        resizeMode='cover'></Image>
        </Quadrado>

        <SubTitulo cor='#000'>Clique nos botoes abaixo de acordo com a quantidade de ml consumida</SubTitulo>

        <Botao onPress={() => addTotalConsumo(200)}>
        
          <TextoBotao>200ml</TextoBotao>
        </Botao>
      
      <Botao onPress={() => addTotalConsumo(300)}>
                <TextoBotao>300ml</TextoBotao>
      </Botao>

      <Botao onPress={() => addTotalConsumo(500)}>
                <TextoBotao>500ml</TextoBotao>
      </Botao>
      </Header>
      <MensagemResultado>Consumo: {totalConsumo} ml</MensagemResultado>
      <Descricao cor='#000'>Autor: Mateus da Siva Batista </Descricao>
    </Pagina>
  );
}