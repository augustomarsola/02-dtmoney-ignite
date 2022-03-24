import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionalTypeContainer, RadioBox } from "./styles";

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionalModal({ isOpen, onRequestClose }: NewTransactionalModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título" 
          onChange={event => setTitle(event.target.value)} 
        />

        <input 
          type="number" 
          placeholder="Valor" 
          onChange={event => setValue(Number(event.target.value))} 
        />

        <TransactionalTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            activeColor='green'
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Lançar Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            activeColor='red'
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Lançar Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionalTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria" 
          onChange={event => setCategory(event.target.value)} 
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}