import React from 'react'
import CenteringContainer from "./components/CenteringContainer";
import Header from "./components/Header";
import NameList from "./components/NameList";
import Search from "./components/Search";
import useNames from "./hooks/useNames";

const App = () => {
  useNames()
  return (
    <CenteringContainer>
      <Header />
      <Search />
      <NameList />
    </CenteringContainer>
  )
}

export default App;
