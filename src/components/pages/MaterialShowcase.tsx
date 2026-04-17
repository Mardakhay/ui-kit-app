import { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
  Chip,
  LinearProgress,
  CircularProgress,
  Typography,
  Divider,
  Stack,
} from '@mui/material';
import {
  Send as SendIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Add as AddIcon,
} from '@mui/icons-material';

export default function MaterialShowcase() {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const emailError =
    emailValue && !emailValue.includes('@') ? 'Email formatı düzgün deyil' : '';

  return (
    <div className="showcase">
      <header className="showcase__header">
        <h1 className="showcase__title" style={{
          background: 'linear-gradient(135deg, #1976d2, #9c27b0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          📦 Material UI Showcase
        </h1>
        <p className="showcase__subtitle">Button, TextField, Card</p>
      </header>

      {/* ===== BUTTONS ===== */}
      <section className="section">
        <h2 className="section__title">
          🔘 Button <span className="badge badge--blue">6 variants</span>
        </h2>
        <div className="section__divider" />

        <p className="demo-label">Contained</p>
        <div className="demo-row">
          <Button variant="contained">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
        </div>

        <p className="demo-label">Outlined</p>
        <div className="demo-row">
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="error">Error</Button>
        </div>

        <p className="demo-label">Text</p>
        <div className="demo-row">
          <Button variant="text">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="error">Error</Button>
        </div>

        <p className="demo-label">Sizes</p>
        <div className="demo-row">
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </div>

        <p className="demo-label">With Icons</p>
        <div className="demo-row">
          <Button variant="contained" startIcon={<SendIcon />}>Göndər</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />} color="error">Sil</Button>
          <Button variant="contained" endIcon={<DownloadIcon />} color="success">Yüklə</Button>
          <Button variant="text" endIcon={<AddIcon />} color="secondary">Əlavə et</Button>
        </div>

        <p className="demo-label">States</p>
        <div className="demo-row">
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant="outlined" disabled>Disabled</Button>
          <Button variant="contained" disabled={isLoading} onClick={handleLoadingDemo}>
            {isLoading ? (
              <><CircularProgress size={18} sx={{ mr: 1, color: 'inherit' }} /> Yüklənir...</>
            ) : 'Loading Demo'}
          </Button>
        </div>

        <p className="demo-label">Full Width</p>
        <Button variant="contained" fullWidth startIcon={<SendIcon />}>Tam Eni ilə Düymə</Button>
        <div style={{ height: 8 }} />
        <Button variant="outlined" fullWidth color="secondary">Tam Eni ilə Outlined</Button>
      </section>

      {/* ===== TEXTFIELD ===== */}
      <section className="section">
        <h2 className="section__title">
          ✏️ TextField <span className="badge badge--green">3 variants</span>
        </h2>
        <div className="section__divider" />

        <p className="demo-label">Outlined</p>
        <div className="input-grid">
          <TextField
            label="Ad"
            placeholder="Adınızı daxil edin"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            helperText="Tam adınızı yazın"
          />
          <TextField
            label="Email"
            type="email"
            placeholder="email@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            error={!!emailError}
            helperText={emailError || ''}
            fullWidth
          />
        </div>

        <p className="demo-label">Filled</p>
        <div className="input-grid">
          <TextField label="Telefon" variant="filled" placeholder="+994 XX XXX XX XX" fullWidth />
          <TextField
            label="Şifrə"
            type="password"
            variant="filled"
            placeholder="Minimum 8 simvol"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            helperText={
              passwordValue.length > 0 && passwordValue.length < 8
                ? `${8 - passwordValue.length} simvol daha lazımdır`
                : passwordValue.length >= 8
                ? '✓ Kifayət qədər uzundur'
                : ''
            }
            fullWidth
          />
        </div>

        <p className="demo-label">Standard</p>
        <div className="input-grid">
          <TextField label="Axtarış" variant="standard" placeholder="Axtar..." fullWidth />
          <TextField label="Veb-sayt" variant="standard" placeholder="https://example.com" fullWidth />
        </div>

        <p className="demo-label">Error</p>
        <TextField label="Email (xətalı)" error helperText="Bu sahə tələb olunur" fullWidth />

        <p className="demo-label">Multiline</p>
        <TextField label="Bio" multiline rows={3} placeholder="Haqqınızda..." fullWidth />
      </section>

      {/* ===== CARDS ===== */}
      <section className="section">
        <h2 className="section__title">
          🃏 Card <span className="badge badge--purple">Composable</span>
        </h2>
        <div className="section__divider" />

        <p className="demo-label">Elevated</p>
        <div className="cards-grid">
          <Card elevation={3}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: '#1976d2' }}>📈</Avatar>}
              title="Statistika"
              subheader="Bu Ay"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">Ümumi satışlar artıb</Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Chip label="2,847 sifariş" size="small" />
                <Chip label="+12.5%" size="small" color="success" />
              </Stack>
            </CardContent>
          </Card>

          <Card elevation={3}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: '#2e7d32' }}>👤</Avatar>}
              title="İstifadəçilər"
              subheader="Aktiv"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">Son 30 gündə</Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Chip label="1,234 nəfər" size="small" />
                <Chip label="89%" size="small" color="info" />
              </Stack>
            </CardContent>
          </Card>

          <Card elevation={3}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: '#7b1fa2' }}>✅</Avatar>}
              title="Tapşırıqlar"
              subheader="Sprint"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom>Tamamlanma</Typography>
              <LinearProgress variant="determinate" value={90} sx={{ borderRadius: 4, height: 6, mb: 1 }} />
              <Typography variant="caption" color="text.secondary">47/52 — 90%</Typography>
            </CardContent>
          </Card>
        </div>

        <p className="demo-label">Outlined</p>
        <Card variant="outlined">
          <CardHeader title="📝 Profil Formu" />
          <Divider />
          <CardContent>
            <Stack spacing={2}>
              <TextField label="Ad" placeholder="Adınızı daxil edin" fullWidth />
              <TextField label="Email" type="email" placeholder="email@example.com" fullWidth />
              <TextField label="Bio" placeholder="Haqqınızda" variant="filled" fullWidth multiline rows={2} />
            </Stack>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
            <Button variant="text" size="small">Ləğv et</Button>
            <Button variant="contained" size="small" startIcon={<SendIcon />}>Saxla</Button>
          </CardActions>
        </Card>

        <p className="demo-label">Filled</p>
        <div className="cards-grid">
          <Card sx={{ bgcolor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Small Card</Typography>
              <Typography variant="body2" color="text.secondary">Sadə kart</Typography>
            </CardContent>
          </Card>
          <Card sx={{ bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Info Card</Typography>
              <Typography variant="body2" color="text.secondary">Mavi fon</Typography>
            </CardContent>
          </Card>
          <Card sx={{ bgcolor: '#fce4ec' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Accent Card</Typography>
              <Typography variant="body2" color="text.secondary">Çəhrayı fon</Typography>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section__title">🔗 Birləşdirilmiş Nümunə</h2>
        <div className="section__divider" />

        <Card elevation={4} sx={{ borderRadius: 3 }}>
          <CardHeader title="🔐 Daxil ol" subheader="Hesabınıza daxil olun" sx={{ pb: 0 }} />
          <CardContent>
            <Stack spacing={2.5}>
              <TextField label="Email" type="email" placeholder="admin@example.com" fullWidth />
              <TextField label="Şifrə" type="password" placeholder="••••••••" variant="filled" fullWidth />
            </Stack>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
            <Button variant="text">Şifrəni unutdum?</Button>
            <Button variant="contained" startIcon={<SendIcon />}>Daxil ol</Button>
          </CardActions>
        </Card>
      </section>
    </div>
  );
}