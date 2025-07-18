import ProtectedRoute from "./src/ProtectedRoute";
import Route from "./src/Route";


export default function App() {
  const auth = true;

  return (
    auth ? <ProtectedRoute /> : <Route />
  )
}
