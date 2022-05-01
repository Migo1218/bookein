import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./index.css"
import AppRouter from "./routes/AppRouter";
// import DateFnsUtils from "@date-io/date-fns/build/date-fns-utils";
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es'

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
     <AppRouter/>
    </MuiPickersUtilsProvider>
  );
}

export default App;
