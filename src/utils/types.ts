type Images = {
  png?: string;
  webp?: string;
  portrait?: string;
  landscape?: string;
};

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface Crew {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: Images;
  description: string;
}
