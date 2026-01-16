import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const dataDir = path.join(process.cwd(), 'src', 'data');

export interface Service {
  name: string;
  day: string;
  time: string;
  order: number;
}

export interface SiteSettings {
  churchName: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
  };
  youtube?: string;
  bank: {
    accountName: string;
    sortCode: string;
    accountNumber: string;
  };
}

export function getServices(): Service[] {
  try {
    const filePath = path.join(dataDir, 'services.yml');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = YAML.parse(fileContent);
    return data.services.sort((a: Service, b: Service) => a.order - b.order);
  } catch (error) {
    console.error('Error reading services.yml:', error);
    return [];
  }
}

export function getSettings(): SiteSettings | null {
  try {
    const filePath = path.join(dataDir, 'settings.yml');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return YAML.parse(fileContent);
  } catch (error) {
    console.error('Error reading settings.yml:', error);
    return null;
  }
}
