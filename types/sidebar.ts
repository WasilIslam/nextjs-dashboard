export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  subItems?: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  badge?: string | number;
}

export interface SidebarConfig {
  items: SidebarItem[];
  title?: string;
  footer?: string;
}
