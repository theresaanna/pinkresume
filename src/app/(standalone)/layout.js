export const metadata = {
  title: 'SparkleFall - Beautiful Falling Sparkle Animations',
  description: 'Interactive demo of SparkleFall - customizable falling sparkle animations with zero dependencies',
};

export default function StandaloneLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}