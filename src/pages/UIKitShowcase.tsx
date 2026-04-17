import { useState } from 'react';
import { Button, Input, Card } from '../ui';

export default function UIKitShowcase() {
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
        <h1 className="showcase__title">🎨 UI Kit Showcase</h1>
        <p className="showcase__subtitle">Button, Input, Card</p>
      </header>

      <section className="section">
        <h2 className="section__title">
          🔘 Button <span className="badge badge--blue">4 variants</span>
        </h2>
        <div className="section__divider" />

        <p className="demo-label">Variants</p>
        <div className="demo-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <p className="demo-label">Sizes</p>
        <div className="demo-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <p className="demo-label">With Icons</p>
        <div className="demo-row">
          <Button variant="primary" leftIcon="🚀">Göndər</Button>
          <Button variant="secondary" leftIcon="📎">Əlavə et</Button>
          <Button variant="danger" leftIcon="🗑️">Sil</Button>
          <Button variant="ghost" rightIcon="→">Davam et</Button>
        </div>

        <p className="demo-label">States</p>
        <div className="demo-row">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button loading={isLoading} onClick={handleLoadingDemo}>
            {isLoading ? 'Yüklənir...' : 'Loading Demo'}
          </Button>
        </div>

        <p className="demo-label">Full Width</p>
        <Button fullWidth variant="primary" leftIcon="✨">Tam Eni ilə Düymə</Button>
        <div style={{ height: 8 }} />
        <Button fullWidth variant="secondary">Tam Eni ilə Secondary</Button>
      </section>

      <section className="section">
        <h2 className="section__title">
          ✏️ Input <span className="badge badge--green">3 variants</span>
        </h2>
        <div className="section__divider" />

        <p className="demo-label">Outlined (Default)</p>
        <div className="input-grid">
          <Input
            label="Ad"
            placeholder="Adınızı daxil edin"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            helperText="Tam adınızı yazın"
          />
          <Input
            label="Email"
            type="email"
            placeholder="email@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            error={emailError}
            fullWidth
          />
        </div>

        <p className="demo-label">Filled</p>
        <div className="input-grid">
          <Input label="Telefon" variant="filled" placeholder="+994 XX XXX XX XX" fullWidth />
          <Input
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
          <Input label="Axtarış" variant="standard" placeholder="Axtar..." leftIcon="🔍" fullWidth />
          <Input label="Veb-sayt" variant="standard" placeholder="https://example.com" leftIcon="🌐" fullWidth />
        </div>

        <p className="demo-label">Error</p>
        <Input label="Email (xətalı)" placeholder="email daxil edin" error="Bu sahə tələb olunur" fullWidth />
      </section>

      <section className="section">
        <h2 className="section__title">
          🃏 Card <span className="badge badge--purple">Compound Pattern</span>
        </h2>
        <div className="section__divider" />

        <p className="demo-label">Elevated</p>
        <div className="cards-grid">
          <Card variant="elevated" hoverable>
            <Card.Header>📊 Statistika</Card.Header>
            <Card.Body>
              <div className="card-avatar card-avatar--blue">📈</div>
              <p className="card-title">Bu Ay</p>
              <p className="card-text">Ümumi satışlar artıb</p>
              <div className="card-stats">
                <span className="card-stat"><strong>2,847</strong> sifariş</span>
                <span className="card-stat"><strong>+12.5%</strong> artım</span>
              </div>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>👥 İstifadəçilər</Card.Header>
            <Card.Body>
              <div className="card-avatar card-avatar--green">👤</div>
              <p className="card-title">Aktiv</p>
              <p className="card-text">Son 30 gündə</p>
              <div className="card-stats">
                <span className="card-stat"><strong>1,234</strong> nəfər</span>
                <span className="card-stat"><strong>89%</strong> saxlanma</span>
              </div>
            </Card.Body>
          </Card>

          <Card variant="elevated" hoverable>
            <Card.Header>🎯 Tapşırıqlar</Card.Header>
            <Card.Body>
              <div className="card-avatar card-avatar--purple">✅</div>
              <p className="card-title">Sprint</p>
              <p className="card-text">Tamamlanma vəziyyəti</p>
              <div className="card-stats">
                <span className="card-stat"><strong>47/52</strong> bitib</span>
                <span className="card-stat"><strong>90%</strong></span>
              </div>
            </Card.Body>
          </Card>
        </div>

        <p className="demo-label">Outlined</p>
        <Card variant="outlined" padding="lg">
          <Card.Header>📝 Profil Formu</Card.Header>
          <Card.Body>
            <Input label="Ad" placeholder="Adınızı daxil edin" fullWidth />
            <Input label="Email" type="email" placeholder="email@example.com" fullWidth />
            <Input label="Bio" placeholder="Haqqınızda" variant="filled" fullWidth />
          </Card.Body>
          <Card.Footer>
            <Button variant="ghost" size="sm">Ləğv et</Button>
            <Button variant="primary" size="sm" leftIcon="💾">Saxla</Button>
          </Card.Footer>
        </Card>

        <p className="demo-label">Filled + Padding</p>
        <div className="cards-grid">
          <Card variant="filled" padding="sm">
            <Card.Body>
              <p className="card-title">Small</p>
              <p className="card-text">padding: sm</p>
            </Card.Body>
          </Card>
          <Card variant="filled" padding="md">
            <Card.Body>
              <p className="card-title">Medium</p>
              <p className="card-text">padding: md</p>
            </Card.Body>
          </Card>
          <Card variant="filled" padding="lg">
            <Card.Body>
              <p className="card-title">Large</p>
              <p className="card-text">padding: lg</p>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">🔗 Birləşdirilmiş Nümunə</h2>
        <div className="section__divider" />

        <Card variant="elevated" padding="lg">
          <Card.Header>🔐 Daxil ol</Card.Header>
          <Card.Body>
            <Input label="Email" type="email" placeholder="admin@example.com" leftIcon="📧" fullWidth />
            <Input label="Şifrə" type="password" placeholder="••••••••" leftIcon="🔒" variant="filled" fullWidth />
          </Card.Body>
          <Card.Footer>
            <Button variant="ghost">Şifrəni unutdum?</Button>
            <Button variant="primary" leftIcon="🚀">Daxil ol</Button>
          </Card.Footer>
        </Card>
      </section>
    </div>
  );
}
