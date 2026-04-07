/**
 * Prismic Slice Zone components registry.
 *
 * Currently the homepage renders sections via the DAL pattern (page.tsx → server.ts → component props).
 * When Prismic content is populated, this registry will map CMS slice types to
 * wrapper components that transform Prismic fields into DTO props.
 *
 * For now, these are placeholder mappings.
 */

export const components = {
  hero_section: () => null,
  services_carousel: () => null,
  about_section: () => null,
  logo_bar: () => null,
  testimonials: () => null,
  case_studies: () => null,
  process_section: () => null,
  approach_grid: () => null,
  tech_stack: () => null,
  how_it_works: () => null,
  featured_resources: () => null,
  cta_banner: () => null,
};
