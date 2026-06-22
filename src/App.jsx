import { LanguageProvider } from "./i18n";
import KomerzeLanding from "./components/KomerzeLanding";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <KomerzeLanding />
    </LanguageProvider>
  );
}

export default App;
