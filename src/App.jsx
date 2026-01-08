import './App.css'
import ControlledForm from './components/ControlledForm/ControlledForm'
import FromAction from './components/FromAction/FromAction'
import HookForm from './components/HookForm/HookForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'

function App() {


  return (
    <>
      <h1>React router</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FromAction></FromAction> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      <HookForm></HookForm>
    </>
  )
}

export default App
