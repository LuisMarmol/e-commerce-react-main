import './App.css';
import { NavBar } from './components/NavBar/NavBar';

function Header({children}) {
  return(
    <h2 class="cs-title">{children}</h2>
  );
}

function App() {
  return (
    <>
      <section id="collection-1602">

        <div class="cs-container">
          <div class="cs-content">
            <Header>New Collection</Header>
            
            <div class="cs-button-group">
              <NavBar>New Arrival</NavBar>
              <NavBar>Top Rating</NavBar>
              <NavBar>Best Seller</NavBar>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default App
