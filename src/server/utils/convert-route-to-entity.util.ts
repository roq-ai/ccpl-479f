const mapping: Record<string, string> = {
  branches: 'branch',
  companies: 'company',
  'company-infos': 'company_info',
  'contact-forms': 'contact_form',
  products: 'product',
  'product-details': 'product_details',
  'product-images': 'product_image',
  'product-ratings': 'product_rating',
  testimonials: 'testimonial',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
