import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionalModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";


function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactioModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionalModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
