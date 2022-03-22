import { Grid } from "@mui/material";
import "./App.css";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
