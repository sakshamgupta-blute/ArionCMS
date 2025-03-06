import type { Schema, Struct } from '@strapi/strapi';

export interface SocialLinksFooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_footer_social_links';
  info: {
    displayName: 'footerSocialLinks';
  };
  attributes: {
    colorClass: Schema.Attribute.String;
    iconClass: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SocialLinksHeaderSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_header_social_links';
  info: {
    displayName: 'headerSocialLinks';
  };
  attributes: {
    hoverText: Schema.Attribute.String;
    iconClass: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'social-links.footer-social-links': SocialLinksFooterSocialLinks;
      'social-links.header-social-links': SocialLinksHeaderSocialLinks;
    }
  }
}
