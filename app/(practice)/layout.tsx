import { Link } from 'lucide-react'
import React, { ReactNode } from 'react'

export default function PracticeLayout({
    children,
    marketingSlot,
    salesSlot,
}: {
    children: ReactNode;
    marketingSlot: ReactNode;
    salesSlot: ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link className="hover:underline" href="/development">
          Development
        </Link>
        <Link className="hover:underline" href="/testing">
          Testing
        </Link>
        <Link className="hover:underline" href="/marketing">
          Marketing
        </Link>
        <Link className="hover:underline" href="/marketing/settings">
          Settings
        </Link>
        <Link className="hover:underline" href="/sales">
          Sales
        </Link>
      </nav>

      <div className="flex">
        {marketingSlot}
        {salesSlot}
      </div>

      {children}
    </div>
  )
}
