/** Datos de la ficha pública de Destonac S.L. (Xarxa Industrial i Negocis) y directorios. */
export const business = {
  name: 'Destonac',
  legalName: 'Destonac S.L.',
  street: 'Ctra. de Sant Climent, 73, Local 6',
  postalCode: '08840',
  city: 'Viladecans',
  region: 'Barcelona',
  phone: { display: '930 02 72 00', e164: '+34930027200' },
  email: 'destonac@destonac.cat',
  /** "Personal tècnic qualificat amb més de 30 anys d'experiència" (ficha del negocio). */
  experiencia: '+30 años',
  rating: { value: '8,7', scale: '10', count: 145, source: 'Trustlocal', url: 'https://trustlocal.es/barcelona/viladecans/instalador-aire-acondicionado/destonac-sl/' },
  areaServed: ['Viladecans', 'Baix Llobregat'],
} as const;

export const telUrl = `tel:${business.phone.e164}`;
