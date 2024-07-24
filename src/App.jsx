import AuthInputs from './components/AuthInputs.jsx';
import ColorButton from './components/colorButton.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <ColorButton />
    </>
  );
}
