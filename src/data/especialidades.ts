/** Especialidades declaradas en la ficha del negocio (traducidas del catalán). */
export interface Especialidad { readonly code: string; readonly name: string; readonly text: string }
export const especialidades: readonly Especialidad[] = [
  { code: 'CLI', name: 'Climatización', text: 'Splits, conductos y cassette para viviendas, oficinas y locales.' },
  { code: 'VEN', name: 'Ventilación', text: 'Renovación de aire y extracción en locales y espacios de trabajo.' },
  { code: 'FRI', name: 'Frío industrial', text: 'Instalaciones frigoríficas para negocio e industria.' },
  { code: 'ELE', name: 'Electricidad', text: 'Instalaciones eléctricas asociadas a cada proyecto.' },
  { code: 'FON', name: 'Fontanería', text: 'Agua y desagües, en obra nueva y reforma.' },
  { code: 'REF', name: 'Proyectos y reformas integrales', text: 'Con una red propia de colaboradores para cada oficio.' },
];
