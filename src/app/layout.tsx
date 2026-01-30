import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Open Mazad | Premium Auction Platform',
  description: 'Secure, transparent, and AI-driven bidding for high-value assets across the GCC and Arab markets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
