export const DEMO_ANALYSIS_DATA = {
  isDemoMode: true,
  demoNotice: 'Demo Analysis — AI Processing Not Connected. The findings, clauses, and scores below are structured demonstration content illustrating the LegalLens AI analysis experience.',
  status: 'Demo Analysis Complete',
  document: {
    name: 'Master_Services_Agreement_2026.pdf',
    sizeFormatted: '1.8 MB',
    fileType: 'PDF Document',
    pages: 14,
    uploadDate: 'September 2026',
    verifiedFormat: true,
  },
  persona: {
    id: 'student',
    title: 'Student',
    subtitle: 'Academic & Internships',
    perspectiveNotice: 'Analysis perspective configured to highlight liability shifts, IP assignments, and uncompensated duty risks.',
  },
  language: {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    flag: '🇺🇸',
  },
  overallRisk: {
    score: 68,
    maxScore: 100,
    level: 'Moderate Risk',
    color: 'amber',
    summary: 'Several clauses require attention and counter-proposals before execution.',
    breakdown: [
      { category: 'Liability & Indemnification', score: 88, level: 'High Risk', count: 1 },
      { category: 'Restrictive Covenants (Non-Compete)', score: 82, level: 'High Risk', count: 1 },
      { category: 'Termination & Cancellation', score: 65, level: 'Moderate Risk', count: 1 },
      { category: 'Intellectual Property Rights', score: 58, level: 'Moderate Risk', count: 1 },
      { category: 'Dispute Resolution & Jurisdiction', score: 32, level: 'Low Risk', count: 1 },
    ],
  },
  executiveSummary: {
    overview: 'This sample Master Services Agreement establishes formal engagement terms for contracted services. The demonstration review identifies asymmetric liability provisions, broad post-termination covenants, and unilateral termination terms favoring the service commissioner.',
    whatYouAreAgreeingTo: 'In this sample contract model, the signing contractor agrees to perform deliverables under milestone acceptance, assign all generated IP, maintain strict confidentiality, and assume extensive indemnification liability for third-party claims.',
    keyResponsibilities: [
      'Deliver milestone artifacts according to specified schedule criteria.',
      'Maintain strict confidentiality of proprietary tools, data, and commercial processes.',
      'Provide 30 days written notice for voluntary contract termination.',
      'Perform all warranty remediation without additional billing within the 60-day acceptance window.',
    ],
    majorConcerns: [
      'Uncapped indemnification liability in Clause 8.4 shifting 100% legal risk regardless of contributory negligence.',
      '12-month post-termination global non-compete covenant in Clause 11.2 barring work across related commercial fields.',
      'Unilateral 3-day termination for convenience in Clause 9.1 with zero cancellation or idle preparation fees.',
    ],
  },
  flaggedClauses: [
    {
      id: 'clause-8-4',
      clauseNumber: '8.4',
      title: 'Indemnification & Third-Party Liability',
      riskLevel: 'HIGH',
      badgeLabel: 'High Risk',
      originalText: 'Client shall unconditionally indemnify, defend, and hold harmless Service Provider and its affiliates against all third-party claims, liabilities, losses, damages, and legal fees arising out of or related to this Agreement, regardless of fault, contributory negligence, or prior notice.',
      plainLanguage: 'This clause transfers full financial and legal responsibility to you for third-party claims and lawsuits, even if the other party contributed to the fault or negligence.',
      whyItMatters: 'You could be personally liable for tens of thousands of dollars in legal expenses and settlements for mistakes or oversights you did not directly cause.',
      recommendedAction: 'Propose mutual indemnification, introduce an explicit liability ceiling (such as 1x total contract fees paid), and exclude claims resulting from the other party\'s gross negligence.',
      sourceRef: 'Sample Section 8, Page 4, Paragraph 2',
    },
    {
      id: 'clause-11-2',
      clauseNumber: '11.2',
      title: 'Post-Termination Non-Compete & Client Restriction',
      riskLevel: 'HIGH',
      badgeLabel: 'High Risk',
      originalText: 'For a duration of twelve (12) months following the termination or expiration of this Agreement, Contractor shall not directly or indirectly engage in, consult for, or provide similar services to any commercial enterprise operating in a competing line of business globally.',
      plainLanguage: 'You are barred from working with any competitors worldwide in your domain of expertise for a full 12 months after this engagement concludes.',
      whyItMatters: 'An overly broad non-compete clause can prevent you from securing new employment, freelance contracts, or utilizing your core professional skills.',
      recommendedAction: 'Limit the restriction to direct active clients you worked with, restrict geographic reach to immediate local markets, and reduce the duration to 3 months or request its complete removal.',
      sourceRef: 'Sample Section 11, Page 6, Paragraph 1',
    },
    {
      id: 'clause-9-1',
      clauseNumber: '9.1',
      title: 'Unilateral Termination for Convenience',
      riskLevel: 'MODERATE',
      badgeLabel: 'Moderate Risk',
      originalText: 'Company reserves the right to terminate this Agreement at any time, with or without cause, upon three (3) business days\' written notice to Contractor, without incurring any termination fee, severance, or liability for unperformed milestones.',
      plainLanguage: 'The hiring company can cancel your contract on 3 days\' notice without paying any severance or compensation for unbilled preparation time.',
      whyItMatters: 'Leaves you vulnerable to sudden income loss and schedule disruption after investing time preparing deliverables.',
      recommendedAction: 'Request a symmetrical 30-day notice period for termination without cause, and add a clause guaranteeing payment for all work in progress and non-recoverable expenses.',
      sourceRef: 'Sample Section 9, Page 5, Paragraph 3',
    },
    {
      id: 'clause-5-3',
      clauseNumber: '5.3',
      title: 'Intellectual Property Assignment & Moral Rights Waiver',
      riskLevel: 'MODERATE',
      badgeLabel: 'Moderate Risk',
      originalText: 'Contractor hereby irrevocably assigns to Company all worldwide rights, titles, and interests in and to all inventions, works of authorship, and pre-existing background developer tools incorporated into deliverables, waiving all moral rights therein.',
      plainLanguage: 'You surrender full ownership not only of the final project, but also of pre-existing templates, tools, and code libraries you incorporated.',
      whyItMatters: 'Could legally prevent you from reusing your standard boilerplate code, design templates, or proprietary frameworks for future clients.',
      recommendedAction: 'Explicitly carve out "Background Pre-existing IP" in a separate schedule, granting the company a non-exclusive license rather than an outright assignment.',
      sourceRef: 'Sample Section 5, Page 3, Paragraph 4',
    },
    {
      id: 'clause-14-1',
      clauseNumber: '14.1',
      title: 'Governing Law & Mandatory Binding Arbitration',
      riskLevel: 'LOW',
      badgeLabel: 'Low / Informational',
      originalText: 'This Agreement shall be governed by and construed under the laws of the State of Delaware. Any dispute shall be settled exclusively through binding arbitration in Wilmington, Delaware, with each party bearing its own initial legal expenses.',
      plainLanguage: 'Any legal dispute must be resolved through binding arbitration in Delaware rather than through your local civil courts.',
      whyItMatters: 'Arbitration fees and travel requirements for out-of-state proceedings can make pursuing minor claims or unpaid invoices cost-prohibitive.',
      recommendedAction: 'Request your local jurisdiction or add a provision allowing remote/virtual dispute proceedings for claims under $25,000.',
      sourceRef: 'Sample Section 14, Page 8, Paragraph 1',
    },
  ],
  obligations: [
    {
      id: 'ob-1',
      category: 'Payment & Invoicing',
      title: 'Net-45 Invoicing Schedule',
      description: 'Invoices submitted at calendar month-end are payable within 45 days upon formal written acceptance by the client.',
      priority: 'High',
      clauseRef: 'Sample Clause 4.2',
    },
    {
      id: 'ob-2',
      category: 'Acceptance & Revision',
      title: '60-Day Defect Warranty Period',
      description: 'Contractor must correct documented deviations within 5 business days of notification without supplemental compensation.',
      priority: 'Moderate',
      clauseRef: 'Sample Clause 6.1',
    },
    {
      id: 'ob-3',
      category: 'Confidentiality',
      title: 'Perpetual Trade Secret Protection',
      description: 'Nondisclosure obligations survive indefinitely for trade secrets and for 5 years post-termination for business data.',
      priority: 'High',
      clauseRef: 'Sample Clause 10.3',
    },
    {
      id: 'ob-4',
      category: 'Insurance Requirements',
      title: 'Commercial General Liability Coverage',
      description: 'Contractor must maintain $1,000,000 professional liability coverage naming the company as an additional insured.',
      priority: 'Moderate',
      clauseRef: 'Sample Clause 12.2',
    },
    {
      id: 'ob-5',
      category: 'Notice Obligations',
      title: '30-Day Written Departure Notice',
      description: 'Must furnish written notification at least 30 days prior to voluntary cessation of milestone engagements.',
      priority: 'Standard',
      clauseRef: 'Sample Clause 9.4',
    },
  ],
  importantTerms: [
    {
      label: 'Contract Duration',
      value: '12 Months (Fixed-Term)',
      notes: 'Begins on the effective execution date',
      icon: 'calendar',
    },
    {
      label: 'Renewal Terms',
      value: 'Automatic 1-Year Rollover',
      notes: 'Requires written cancellation 60 days before expiry',
      icon: 'refresh',
    },
    {
      label: 'Notice Period',
      value: '30 Days Mutual Notice',
      notes: 'Standard termination notice window',
      icon: 'clock',
    },
    {
      label: 'Payment Deadlines',
      value: 'Net-45 Days',
      notes: 'Subject to milestone acceptance verification',
      icon: 'currency',
    },
    {
      label: 'Governing Law',
      value: 'Delaware, USA',
      notes: 'Exclusive binding arbitration forum',
      icon: 'scale',
    },
  ],
  recommendedActions: [
    {
      id: 'rec-1',
      priority: 'Urgent',
      title: 'Cap Indemnification Liability in Clause 8.4',
      detail: 'Negotiate a mutual indemnification clause capped at total fees received, excluding third-party negligence.',
    },
    {
      id: 'rec-2',
      priority: 'Urgent',
      title: 'Narrow or Remove Global Non-Compete in Clause 11.2',
      detail: 'Limit the restrictive covenant to direct active clients rather than a blanket global industry restriction.',
    },
    {
      id: 'rec-3',
      priority: 'Recommended',
      title: 'Increase Termination Notice to 30 Days in Clause 9.1',
      detail: 'Ensure adequate runway and compensation for completed deliverables if the contract is terminated early.',
    },
    {
      id: 'rec-4',
      priority: 'Recommended',
      title: 'Carve Out Background Tools & Pre-Existing IP in Clause 5.3',
      detail: 'Retain underlying ownership of your pre-existing developer libraries, templates, and boilerplates.',
    },
    {
      id: 'rec-5',
      priority: 'Standard',
      title: 'Confirm Net-30 Payment Terms Instead of Net-45',
      detail: 'Request industry-standard 30-day payment turnaround to reduce working capital risk.',
    },
  ],
  evidence: [
    {
      id: 'ev-1',
      finding: 'Asymmetric liability shifting 100% cost to contractor',
      clauseRef: 'Sample Clause 8.4',
      excerpt: '"Client shall unconditionally indemnify, defend, and hold harmless Service Provider... regardless of fault, contributory negligence, or prior notice."',
      sourceLocation: 'Page 4, Lines 12-16',
      impact: 'Exposes signer to catastrophic third-party litigation costs.',
    },
    {
      id: 'ev-2',
      finding: 'Worldwide 12-month post-termination employment barrier',
      clauseRef: 'Sample Clause 11.2',
      excerpt: '"...Contractor shall not directly or indirectly engage in, consult for, or provide similar services to any commercial enterprise operating in a competing line of business globally."',
      sourceLocation: 'Page 6, Lines 3-7',
      impact: 'Impairs future professional livelihoods and freelance engagements.',
    },
    {
      id: 'ev-3',
      finding: 'Immediate 3-day cancellation with zero severance penalty',
      clauseRef: 'Sample Clause 9.1',
      excerpt: '"Company reserves the right to terminate this Agreement at any time, with or without cause, upon three (3) business days\' written notice..."',
      sourceLocation: 'Page 5, Lines 22-25',
      impact: 'Creates cash flow vulnerability and uncompensated preparation risks.',
    },
    {
      id: 'ev-4',
      finding: 'Loss of ownership over pre-existing developer tools',
      clauseRef: 'Sample Clause 5.3',
      excerpt: '"...irrevocably assigns to Company all worldwide rights, titles, and interests in and to all inventions, works of authorship, and pre-existing background developer tools..."',
      sourceLocation: 'Page 3, Lines 30-34',
      impact: 'Risk of copyright infringement if re-using standard templates for subsequent clients.',
    },
  ],
  sampleQuestions: [
    'Can the company terminate this agreement immediately without paying?',
    'What happens to my pre-existing code and tool ownership?',
    'How does the non-compete clause affect my future freelance work?',
    'What are the exact payment deadlines and acceptance terms?',
  ],
};

export function getAnalysisData(userMetadata = {}) {
  // Deep clone demo analysis structure
  const data = JSON.parse(JSON.stringify(DEMO_ANALYSIS_DATA));

  // Merge user's actual document metadata from upload state if provided
  if (userMetadata.file) {
    data.document.name = userMetadata.file.name || data.document.name;
    if (userMetadata.file.sizeFormatted) {
      data.document.sizeFormatted = userMetadata.file.sizeFormatted;
    } else if (userMetadata.file.size) {
      const bytes = userMetadata.file.size;
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      data.document.sizeFormatted = `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    }
  }

  // Merge persona if provided
  if (userMetadata.persona) {
    data.persona.id = userMetadata.persona;
    const personaMap = {
      student: { title: 'Student', subtitle: 'Academic & Internships' },
      employee: { title: 'Employee', subtitle: 'Workplace & Employment' },
      freelancer: { title: 'Freelancer', subtitle: 'Independent Contractor' },
      tenant: { title: 'Tenant', subtitle: 'Rental & Leases' },
      founder: { title: 'Startup Founder', subtitle: 'Business & Ventures' },
      other: { title: 'General / Custom', subtitle: 'Personal Legal Review' },
    };
    if (personaMap[userMetadata.persona]) {
      data.persona.title = personaMap[userMetadata.persona].title;
      data.persona.subtitle = personaMap[userMetadata.persona].subtitle;
    }
    if (userMetadata.persona === 'other' && userMetadata.customPersona) {
      data.persona.title = `Other (${userMetadata.customPersona})`;
    }
  }

  // Merge language if provided
  if (userMetadata.language) {
    data.language.code = userMetadata.language;
    const langMap = {
      en: { label: 'English', nativeLabel: 'English', flag: '🇺🇸' },
      hi: { label: 'Hindi', nativeLabel: 'हिन्दी', flag: '🇮🇳' },
      es: { label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸' },
      fr: { label: 'French', nativeLabel: 'Français', flag: '🇫🇷' },
      de: { label: 'German', nativeLabel: 'Deutsch', flag: '🇩🇪' },
      ja: { label: 'Japanese', nativeLabel: '日本語', flag: '🇯🇵' },
      pt: { label: 'Portuguese', nativeLabel: 'Português', flag: '🇧🇷' },
      zh: { label: 'Chinese', nativeLabel: '中文', flag: '🇨🇳' },
    };
    if (langMap[userMetadata.language]) {
      data.language.label = langMap[userMetadata.language].label;
      data.language.nativeLabel = langMap[userMetadata.language].nativeLabel;
      data.language.flag = langMap[userMetadata.language].flag;
    }
  }

  return data;
}
