import { Route, Switch } from 'wouter';

import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Paid from './components/Paid.jsx';
import Projects from './components/Projects.jsx';

function Home() {
  return <Projects />
}

function Works() {
  return <Paid />
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-grow px-4">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/works" component={Works} />

          <Route>❌ Page not found</Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
