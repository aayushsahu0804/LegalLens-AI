export const MAX_FILE_SIZE_MB = 25;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export const ALLOWED_FILE_TYPES = ['application/pdf'];
export const ALLOWED_FILE_EXTENSIONS = ['.pdf'];

export const PERSONA_OPTIONS = [
  {
    id: 'student',
    title: 'Student',
    subtitle: 'Academic & Internships',
    description: 'Internship offers, campus housing leases, educational loans, and academic IP.',
    icon: 'student',
  },
  {
    id: 'employee',
    title: 'Employee',
    subtitle: 'Workplace & Employment',
    description: 'Employment agreements, NDAs, non-competes, IP assignments, and severance.',
    icon: 'employee',
  },
  {
    id: 'freelancer',
    title: 'Freelancer',
    subtitle: 'Independent Contractor',
    description: 'Client master services agreements, payment milestones, liability limits, and scope.',
    icon: 'freelancer',
  },
  {
    id: 'tenant',
    title: 'Tenant',
    subtitle: 'Rental & Leases',
    description: 'Residential & commercial leases, rent escalation, security deposits, and maintenance.',
    icon: 'tenant',
  },
  {
    id: 'founder',
    title: 'Startup Founder',
    subtitle: 'Business & Ventures',
    description: 'SAFE notes, term sheets, vendor contracts, partnership agreements, and advisor NDAs.',
    icon: 'founder',
  },
  {
    id: 'other',
    title: 'Other',
    subtitle: 'General / Custom',
    description: 'Personal contracts, purchase agreements, service waivers, or custom legal documents.',
    icon: 'other',
  },
];
