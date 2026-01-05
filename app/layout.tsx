import "./globals.css"
import styles from "@/app/layout.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          {children}
        </div>
      </body>
    </html>
  )
}
