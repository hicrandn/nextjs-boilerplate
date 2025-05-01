import {
  Shield,
  Bug,
  Fish,
  BarChart2,
  Bookmark,
  Settings,
  HelpCircle,
} from 'lucide-react';

export const navItems = [
  {
    name: 'Security',
    path: '/security',
    icon: Shield,
    badge: '3',
    subItems: [
      { name: 'Overview', path: '/security/overview' },
      { name: 'Alerts', path: '/security/alerts' },
      { name: 'Settings', path: '/security/settings' },
      { name: 'Reports', path: '/security/reports' },
      { name: 'Integrations', path: '/security/integrations' },
      { name: 'API Keys', path: '/security/api-keys' },
      { name: 'User Management', path: '/security/user-management' },
      { name: 'Audit Logs', path: '/security/audit-logs' },
      { name: 'Compliance', path: '/security/compliance' },
    ]
  },
  {
    name: 'Bug Box',
    path: '/bug-box',
    icon: Bug,
    subItems: [
      { name: 'All Bugs', path: '/bug-box/all' },
      { name: 'Reported', path: '/bug-box/reported' },
      { name: 'Fixed', path: '/bug-box/fixed' },
    ]
  },
  {
    name: 'Fishing Tracking',
    path: '/fishing',
    icon: Fish,
    subItems: [
      { name: 'Dashboard', path: '/fishing/dashboard' },
      { name: 'Analytics', path: '/fishing/analytics' },
    ]
  },
  {
    name: 'Deep Stats',
    path: '/stats',
    icon: BarChart2,
    subItems: [
      { name: 'Overview', path: '/stats/overview' },
      { name: 'Details', path: '/stats/details' },
    ]
  },
  {
    name: 'Booked',
    path: '/booked',
    icon: Bookmark,
    subItems: [
      { name: 'All Bookmarks', path: '/booked/all' },
      { name: 'Collections', path: '/booked/collections' },
    ]
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    subItems: [
      { name: 'General', path: '/settings/general' },
      { name: 'Security', path: '/settings/security' },
      { name: 'Notifications', path: '/settings/notifications' },
    ]
  },
  {
    name: 'Support',
    path: '/support',
    icon: HelpCircle,
    subItems: [
      { name: 'Help Center', path: '/support/help' },
      { name: 'Contact Us', path: '/support/contact' },
    ]
  },
];