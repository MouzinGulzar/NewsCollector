import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const country = "in";

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} height={3}/>
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                key=""
                pageSize={pageSize}
                country={country}
                category="science"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
                apiKey={apiKey}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;