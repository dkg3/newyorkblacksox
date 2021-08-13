import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Archives = lazy(() => import('./pages/Archives'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const News = lazy(() => import('./pages/News'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Photos = lazy(() => import('./pages/Photos'));
const Roster = lazy(() => import('./pages/Roster'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Scores = lazy(() => import('./pages/Scores'));
const Stats = lazy(() => import('./pages/Stats'));
const Videos = lazy(() => import('./pages/Videos'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/scores" component={Scores} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/stats" component={Stats} />
        <Route path="/roster" component={Roster} />
        <Route path="/photos" component={Photos} />
        <Route path="/videos" component={Videos} />
        <Route path="/archives" component={Archives} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
