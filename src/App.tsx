import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header/index.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { theme } from "./styles/theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
