export interface IResume {
  basics: IPersonalInformation;
  education: Array<IEducation>;
  works: Array<IWork>;
  projects: Array<IProject>;
  skills: Array<ISkill>;
  awards: Array<IAward>;
  certificates: Array<ICertificate>;
  publications: Array<IPublication>;
  languages: Array<ILanguage>;
  interests: Array<IInterest>;
  references: Array<IReference>;
}

export interface IPersonalInformation {
  name: string;
  label: string;
  image: string;
  location: ILocation;
  profiles: Array<ISocialMedia>;
  phone: string;
  email: string;
}

export interface ISocialMedia {
  network: string;
  username: string;
  url: string;
}

export interface ILocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface IEducation {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: Array<string>;
}

export interface IWork {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: any;
  summary: string;
  highlights: Array<string>;
}

export interface IProject {
  name: string;
  isActive: boolean;
  description: string;
  url: string;
  github: string;
  highlights: Array<string>;
}

export interface ISkill {
  name: string;
  level: string;
  keywords: Array<string>;
}

export interface IAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface ICertificate {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export interface IPublication {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
}

export interface ILanguage {
  language: string;
  fluency: string;
}

export interface IInterest {
  name: string;
  keywords: Array<string>;
}

export interface IReference {
  name: string;
  reference: string;
}
