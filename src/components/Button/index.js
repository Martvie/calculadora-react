import { ButtonContainer } from "./styles";

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer>
      {label}
      </ButtonContainer>
    );
  }
  
  export default Button;