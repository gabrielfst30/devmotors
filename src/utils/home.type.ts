export interface Banner {
  url: string;
  imgix_url: string;
}

export interface CtaButton {
  title: string;
  url: string;
}

export interface About {
  description: string;
  banner: Banner;
}

export interface Service {
  image: Banner;
  description: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  time: string;
}

export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: Banner;
      heading: string;
      cta_button: CtaButton;
      about: About;
      services: Service[];
      contact: Contact;
    };
  };
}
