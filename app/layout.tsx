import './globals.css'

export const metadata = {
  title: 'CropWizard',
  description: 'We can crop any your image',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
