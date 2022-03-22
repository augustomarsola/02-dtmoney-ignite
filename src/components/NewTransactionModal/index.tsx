import Modal from "react-modal";
import { Component } from "./styles";

interface NewTransactionalModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionalModal({ isOpen, onRequestClose }: NewTransactionalModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}