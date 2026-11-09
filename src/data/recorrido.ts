import type { ImageMetadata } from 'astro';
import grua from '../assets/obras/cubierta-grua.jpg';
import tecnicos from '../assets/obras/cubierta-tecnicos.jpg';
import maquinas from '../assets/obras/cubierta-maquinas.jpg';
import fSplit from '../assets/obras/fachada-split.jpg';
import fEscalera from '../assets/obras/fachada-escalera.jpg';
import fSoporte from '../assets/obras/fachada-soporte.jpg';
import tIzado from '../assets/obras/techo-equipo-izado.jpg';
import tConducto from '../assets/obras/techo-conducto.jpg';
import tConductos from '../assets/obras/techo-conductos.jpg';
import tEquipo from '../assets/obras/techo-equipo.jpg';
import of1 from '../assets/obras/oficina-1.jpg';
import of2 from '../assets/obras/oficina-2.jpg';
import ofRejilla from '../assets/obras/oficina-rejilla.jpg';
import v1 from '../assets/obras/vivienda-split-1.jpg';
import v2 from '../assets/obras/vivienda-split-2.jpg';
import mDiag from '../assets/obras/mantenimiento-diagnostico.jpg';
import mUnidad from '../assets/obras/mantenimiento-unidad.jpg';

export type Nivel = 'cubierta' | 'fachada' | 'techo' | 'oficina' | 'vivienda' | 'mantenimiento';
export interface Foto { readonly img: ImageMetadata; readonly alt: string }
export interface Planta { readonly id: Nivel; readonly n: string; readonly label: string; readonly title: string; readonly text: string; readonly fotos: readonly Foto[] }

/** Recorrido por el edificio con fotos de trabajos de Destonac (su ficha pública). */
export const plantas: readonly Planta[] = [
  {
    id: 'cubierta', n: '01', label: 'Cubierta',
    title: 'Arriba del todo, con grúa si hace falta',
    text: 'Máquinas exteriores en azoteas y cubiertas. Cuando el equipo no sube por la escalera, lo subimos con grúa.',
    fotos: [
      { img: grua, alt: 'Grúa elevando una unidad de climatización hasta una azotea' },
      { img: tecnicos, alt: 'Técnicos de Destonac trabajando en una cubierta al atardecer' },
      { img: maquinas, alt: 'Tres unidades exteriores de aire acondicionado instaladas en una terraza' },
    ],
  },
  {
    id: 'fachada', n: '02', label: 'Fachada',
    title: 'Unidades en fachada, trabajando seguros',
    text: 'Soportes, escalera y zona señalizada: la unidad exterior queda firme y el paso de vecinos, protegido.',
    fotos: [
      { img: fEscalera, alt: 'Escalera y conos de señalización junto a una fachada durante una instalación' },
      { img: fSplit, alt: 'Unidad exterior de aire acondicionado instalada en una fachada de ladrillo' },
      { img: fSoporte, alt: 'Unidad interior colocada sobre un soporte de montaje' },
    ],
  },
  {
    id: 'techo', n: '03', label: 'Techo técnico',
    title: 'Lo que no se ve: conductos y equipos',
    text: 'Equipos de conductos y cassette sobre el falso techo, con conductos aislados que reparten el aire por toda la planta.',
    fotos: [
      { img: tIzado, alt: 'Equipo de climatización izado hasta el falso techo' },
      { img: tConducto, alt: 'Conducto de aire instalado en el techo antes de cerrarlo' },
      { img: tEquipo, alt: 'Equipo de técnicos instalando una máquina en el techo de un local' },
      { img: tConductos, alt: 'Red de conductos aislados en un techo técnico' },
    ],
  },
  {
    id: 'oficina', n: '04', label: 'Oficinas y locales',
    title: 'Espacios de trabajo listos para usar',
    text: 'Climatización y ventilación para oficinas y locales, coordinadas con el resto de la reforma.',
    fotos: [
      { img: of2, alt: 'Oficina terminada con puestos de trabajo, lámparas colgantes y grandes ventanales' },
      { img: of1, alt: 'Planta de oficinas terminada con mesas y sillas nuevas' },
      { img: ofRejilla, alt: 'Rejilla de impulsión de aire integrada en el falso techo' },
    ],
  },
  {
    id: 'vivienda', n: '05', label: 'Viviendas',
    title: 'En casa: limpio y bien rematado',
    text: 'Splits de pared bien colocados y con la instalación recogida.',
    fotos: [
      { img: v1, alt: 'Split de aire acondicionado instalado en la pared de un pasillo' },
      { img: v2, alt: 'Split de aire acondicionado sobre una puerta' },
    ],
  },
  {
    id: 'mantenimiento', n: '06', label: 'Mantenimiento',
    title: 'Y después, que siga funcionando',
    text: 'Mantenimiento preventivo y correctivo: diagnóstico con instrumentos, reparación y revisiones.',
    fotos: [
      { img: mDiag, alt: 'Unidad exterior abierta con el técnico midiendo con un multímetro' },
      { img: mUnidad, alt: 'Unidad exterior de aire acondicionado instalada sobre soporte' },
    ],
  },
];
