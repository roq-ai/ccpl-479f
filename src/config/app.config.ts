interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'CCPL',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage product details', 'Manage product ratings', 'Manage company information', 'Manage branches'],
  getQuoteUrl: 'https://app.roq.ai/proposal/172d9147-bb20-4122-83c6-d7288ab1a65a',
};
