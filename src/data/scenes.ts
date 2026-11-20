import { SceneId } from '../types';

export interface SceneMeta {
  id: SceneId;
  index: number;
  title: string;
  subtitle: string;
}

export const SCENES: SceneMeta[] = [
  {
    id: 'opening',
    index: 1,
    title: 'İlk An',
    subtitle: 'Bugün, dünyaya güzel bir kalbin geldiği gün.',
  },
  {
    id: 'portrait',
    index: 2,
    title: 'Canım Anem',
    subtitle: 'Bazı insanlar geldikleri yeri güzelleştirirler.',
  },
  {
    id: 'envelope',
    index: 3,
    title: 'Mektubun Açılışı',
    subtitle: 'Canım Anem\'e özel mektup.',
  },
  {
    id: 'letter',
    index: 4,
    title: 'Mektubunuz',
    subtitle: 'Dört ana bölümden oluşan duygu dolu satırlar.',
  },
  {
    id: 'finale',
    index: 5,
    title: 'Doğum Gününüz Kutlu Olsun',
    subtitle: 'İyi ki bu dünyaya gelmişsiniz Canım Anem.',
  },
];
