import Link from 'next/link';
import React from 'react';

const ItemDetailPersona = ({ persona, label = 'Persona: ' }) => {
  return (
    <li>
      <strong>{label}</strong>
      {persona && (
        <Link href={`/personas/detail?id=${persona?.id}`}>
          <a>{persona?.str}</a>
        </Link>
      )}
      {!persona && 'NO REGISTRA'}
    </li>
  );
};

export default ItemDetailPersona;
