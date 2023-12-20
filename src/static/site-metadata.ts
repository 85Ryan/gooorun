interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'GoooRun...',
  siteUrl: 'https://gooo.run/',
  logo: '',
  description: 'My Running Records',
  navLinks: [],
};

export default data;
