"use client";
import { useEffect, useState, useRef } from "react"
import './globals.scss'
import './destyle.css'
import { Inter } from 'next/font/google'
import Header from '@/components/modules/layouts/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="back_renga">
        <Header />
        {children}
      </body>
    </html>
  )
}
