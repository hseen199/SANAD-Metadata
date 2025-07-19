import React from 'react';

export function BondForm({ type, lang }: {type: 'sender'|'receiver', lang: 'en'|'ar'}) {
  const file = `/forms/bond_form_${type}${lang === 'en' ? '_en' : ''}.html`;
  return <iframe src={file} style={{ width: '100%', height: '100vh', border: 'none' }} />;
}
