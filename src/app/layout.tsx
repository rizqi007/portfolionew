import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
const inter = Poppins({
  subsets: ['latin'],
  weight: ['400']
})

const dataoke = {
  title: 'Muhammad Rizqi',
  description: 'Seorang pengembang Web Developer dari Jakarta..',
  keywords: 'rizqi, Muhammad, Muhammad Rizqi'
}
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL_CLIENT}`),
  ...dataoke,
  alternates: {
    canonical: `${process.env.URL_CLIENT}`,
    languages: {
      'id-ID': '/id-ID',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  themeColor: 'gray',
  openGraph: {
    title: dataoke.title,
    description: dataoke.description,
    images: '/profil.jpg',
    url: `${process.env.URL_CLIENT}`,
    type: 'article',
    locale: 'id_ID',
    authors: 'Muhammad Rizqi'
  },
  twitter: {
    card: 'summary_large_image',
    title: dataoke.title,
    description: dataoke.description,
    creator: 'Muhammad Rizqi',
    images: [`${process.env.URL_CLIENT}/profil.JPG`]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className='light'>
      <body className={inter.className + ' bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-50'}>{children}</body>
    </html>
  )
}
