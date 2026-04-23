import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

const TICKER = [
  'React.js', '✦', 'Next.js', '✦', 'Python', '✦', 'YOLOv8', '✦',
  'PyTorch', '✦', 'scikit-learn', '✦', 'Node.js', '✦', 'PostgreSQL', '✦',
  'SHAP', '✦', 'OpenCV', '✦', 'TypeScript', '✦', 'Flask', '✦',
  'Supabase', '✦', 'FFmpeg', '✦', 'XGBoost', '✦', 'Docker', '✦',
];

export default function App() {
  return (
    <>
      {/* Overlays */}
      <div className="noise" />
      <div className="grid-overlay" />
      <Cursor />

      {/* App */}
      <Navbar />
      <main>
        <Hero />
        <Marquee items={TICKER} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
