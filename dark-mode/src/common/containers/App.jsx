import { DarkModeContextProvider } from '../../DarkModeContext';
export default function App({ children }) {
  return <DarkModeContextProvider>{children}</DarkModeContextProvider>;
}
