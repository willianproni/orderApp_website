import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header/index.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { theme } from "./styles/theme.ts";
import { Orders } from "./components/Orders/index.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Orders />
    </ThemeProvider>
  );
}

export default App;
