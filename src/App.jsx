import TopMenu from './components/topMenu/TopMenu';
import Card from './components/card/Card';
import './App.css'

function App() {

  return (
    <>
      <TopMenu />
      <div className='card-list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <div className='card-next-week'>
        <h4>Proximas semana</h4>
        <div className='card-list'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </div>

    </>
  )
}

export default App
