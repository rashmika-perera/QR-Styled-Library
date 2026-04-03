# qr-styled-library

Reusable, highly customizable styled QR code components for React applications.

## Installation

```bash
npm install qr-styled-library
```

*Note: This library has peer dependencies on `react` and `react-dom`.*

## Components

### 1. `QRCodeCard`
A sleek card component displaying a QR code, a title, and an optional subtitle. Highly customizable.

```tsx
import { QRCodeCard } from 'qr-styled-library';

function App() {
  return (
    <QRCodeCard 
      value="https://github.com" 
      title="Scan to visit GitHub" 
      subtitle="Open the link in your browser"
      qrColor="#000000"
      backgroundColor="#ffffff"
      level="H"
    />
  );
}
```

### 2. `QRCodeAvatarCard`
A stylish card that combines a profile avatar, name, role, and a QR code (excellent for digital business cards).

```tsx
import { QRCodeAvatarCard } from 'qr-styled-library';

function ProfileCard() {
  return (
    <QRCodeAvatarCard 
      value="https://linkedin.com/in/username" 
      name="John Doe" 
      role="Software Engineer"
      avatarUrl="https://via.placeholder.com/150"
    />
  );
}
```

### 3. `ScannerFrame`
A decorative scanner frame with corner brackets that can wrap around your QR code or be used as a placeholder.

```tsx
import { ScannerFrame, QRCodeCard } from 'qr-styled-library';

function Scanner() {
  return (
    <ScannerFrame text="Align the QR code within the frame" frameColor="#6c4cff">
      {/* You can nest elements inside the frame */}
      <div style={{ width: 150, height: 150, backgroundColor: '#eee' }} />
    </ScannerFrame>
  );
}
```

## Advanced Usage

All components accept standard `style` and `className` props, allowing you to easily override their styling using plain CSS, CSS Modules, styled-components, or Tailwind CSS. 

Additionally, the QR Code components (`QRCodeCard` and `QRCodeAvatarCard`) support advanced props passed down to the underlying `qrcode.react` implementation:
- `level`: Error correction level (`"L"`, `"M"`, `"Q"`, `"H"`).
- `includeMargin`: Boolean to include a margin around the QR code.
- `imageSettings`: Object to render a logo/image in the center of the QR code.

## License

ISC
