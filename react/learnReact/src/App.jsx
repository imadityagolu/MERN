import Header from "./Component/Header/Header"
import Count from "./Component/Count"
import Props from "./Component/Props"
import UlLiMap from "./Component/ImpoData/UlLiMap"
import ListMap from "./Component/ListMap"
import DataManu from "./Component/StateDataManupulation/DataManu"
import Mainn from "./Component/ToDoList/Mainn"
import Box from './Component/boxShowHide/Main'
import Test from './Component/Test'
import StateChange from './Component/StatesChange'
import LeaderBoard from './Component/leaderBoard'
import BillSpliter from './Component/BillSpliter'
import ApiRandom from './Component/ApiRandom';
import ApiCall from './Component/ApiCall'
import FakeStore from "./Component/FakeStore"
import WeatherForcast from "./Component/WeatherForcast"
import UsingRef from "./Component/UsingRef/UsingRef"
import Ahref from "./Component/Ahref/Main"
import FakeStoreFull from "./Component/FakeStore/Main"

function App() {
  return (
  <>
  {/*
  <Header/>
  <Props name="Aditya" age="27"/>
  <ListMap/>
  <Count/>
  <UlLiMap/>
  <DataManu/>
  <Mainn/>
  <Test/>
  <StateChange/>
  <LeaderBoard/>
  <BillSpliter/>
  <Box/>
  <BillSpliter/>
  <ApiCall/>
  <FakeStore />
  <WeatherForcast/>
  <UsingRef/>
  <Ahref/>
  */}
  <FakeStoreFull/>

  </>
);
}
export default App;