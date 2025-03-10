import type { Schema, Struct } from '@strapi/strapi';

export interface PrivacyPolicySectionSections extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_section_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialLinksFooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_footer_social_links';
  info: {
    description: '';
    displayName: 'footerSocialLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface TermsAndConditionSectionSections
  extends Struct.ComponentSchema {
  collectionName: 'components_terms_and_condition_section_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'privacy-policy-section.sections': PrivacyPolicySectionSections;
      'social-links.footer-social-links': SocialLinksFooterSocialLinks;
      'social-links.header-social-links': SocialLinksHeaderSocialLinks;
      'terms-and-condition-section.sections': TermsAndConditionSectionSections;
    }
  }
}
