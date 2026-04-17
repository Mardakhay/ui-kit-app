import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import UIKitShowcase from './pages/UIKitShowcase';
import MaterialShowcase from './pages/MaterialShowcase';
import './App.css';

const muiTheme = createTheme({
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  shape: { borderRadius: 10 },
  palette: {
    primary: { main: '#3b82f6' },
    secondary: { main: '#8b5cf6' },
  },
});

type TabKey = 'uikit' | 'mui';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('uikit');

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <nav className="topnav">
        <div className="topnav__inner">
          <span className="topnav__logo">⚡ Component Lab</span>

          <div className="topnav__tabs">
            <button
              className={`topnav__tab ${activeTab === 'uikit' ? 'topnav__tab--active' : ''}`}
              onClick={() => setActiveTab('uikit')}
            >
              <span className="topnav__tab-icon">🎨</span>
              Custom UI Kit
            </button>
            <button
              className={`topnav__tab ${activeTab === 'mui' ? 'topnav__tab--active' : ''}`}
              onClick={() => setActiveTab('mui')}
            >
              <span className="topnav__tab-icon">📦</span>
              Material UI
            </button>
          </div>

          <div className="topnav__indicator" />
        </div>
      </nav>

      <main className="page-content">
        {activeTab === 'uikit' && <UIKitShowcase />}
        {activeTab === 'mui' && <MaterialShowcase />}
      </main>
    </ThemeProvider>
  );
}

export default App;
