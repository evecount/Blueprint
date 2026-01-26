'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function DonateRedirectPage() {
  useEffect(() => {
    redirect('/contribute');
  }, []);

  return null;
}
