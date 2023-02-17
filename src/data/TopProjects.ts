export interface Project {
  name: string;
  description: string;
  slides?: string;
  github?: string;
  video?: string;
}

const topProjectData: Project[] = [
  {
    name: 'TAI',
    description: 'AI-powered Teaching Assistant for Educational Videos',
    slides:
      'https://docs.google.com/presentation/d/12V-STIFkj668yf1604c8dGNef_cwo0KRGigVFxMv2gs/edit?usp=sharing',
  },
  {
    name: 'Empathy',
    description:
      'Assistive tech to allow people with visual impairments to “see” facial expressions of those around them.',
    slides: 'https://tinyurl.com/4yt5y5vz',
    github: 'https://github.com/adrastopoulos/empathy',
  },
  {
    name: 'ContractShield',
    description:
      'Effective Legal Document Inference using Low-Cost BERT Language Model.',
    slides:
      'https://docs.google.com/presentation/d/1xuT24OU5y0is2kUTASjSpMXE0Y3dIWo3/edit?usp=sharing&ouid=103704561549417200980&rtpof=true&sd=true',
    github: 'https://github.com/andrewschoi/TartanHacks2023',
  },
  {
    name: 'PanoTrack',
    description:
      'A system that can be installed in a workshop or makerspace to keep track of items which are frequently moved around or misplaced, by fusing together feeds from all the security cameras in the space.',
    slides: 'https://docs.google.com/presentation/d/1NwAjrDARyAxVVb2QHTSwX7x5QAcS9GYVS4W5yq_Lih0/edit?usp=sharing',
  },
  {
    name: 'SpotiPond',
    description: 'Disrupt your music taste while cultivating your own virtual pond.',
    slides: 'https://drive.google.com/file/d/1pnrbPtrWNJFAj0yPsYgjMMxkjiIzRHP_/view?usp=share_link',
    github: 'https://github.com/richczhou/spotipond',
    video: 'https://drive.google.com/file/d/1ZgMJpgyArFsZvXSl5N2xyGcuUvviURwj/view?usp=sharing'
  },
];
export default topProjectData;
