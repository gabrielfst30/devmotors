export interface PostProps {
  object: ObjectPost[];
}

//tipagem do post
interface ObjectPost {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      title: string;
      text: string;
      button: {
        url: string;
      };
      button_active: boolean;
      button_title: string;
      button_url: string;
    };
  };
}
