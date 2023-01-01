import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const num = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(num))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const num = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(num))
      setOperation('')
    }
  }

  const handleMulNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const num = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(num))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const num = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(num))
      setOperation('')
    }
  }
  //TODO Criar decimais
  //TODO Resolver bug que não usa o resultado


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleSubNumbers()
          break;
        case '*':
          handleMulNumbers()
          break;
        case '/':
          handleDivNumbers()
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="App">

      <Container>
        <Content>
          <Input value={currentNumber} />

          <Row>
            <Button label="x" onClick={handleMulNumbers} />
            <Button label="÷" onClick={handleDivNumbers} />
            <Button label="," onClick={() => handleAddNumber(',')} />
            <Button label="C" onClick={handleClear} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="-" onClick={handleSubNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="=" onClick={handleEquals} />
          </Row>

          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')} />
          </Row>

        </Content>
      </Container>
    </div>
  );
}

export default App;
