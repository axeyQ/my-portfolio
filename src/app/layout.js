export const metadata = {
  title: 'Portfolio Website',
  description: 'A Next.js and Three.js portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}