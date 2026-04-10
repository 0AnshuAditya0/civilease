export interface DocumentIdentity {
  issuing_authority: string;
  department: string;
  document_type: string;
  reference_number: string;
  issue_date: string;
  jurisdiction: string;
}

export interface MonetaryElements {
  amount_demand: number;
  currency: string;
  breakdown: Record<string, number>;
  payment_deadline: string;
  late_fee_structure: string;
}

export interface ProceduralRequirements {
  mandatory_documents: string[];
  optional_documents: string[];
  verification_steps: string[];
  physical_visit_required: boolean;
  visit_location: string;
  estimated_processing_time: string;
}

export interface LegalConsequences {
  non_payment_penalty: string;
  appeal_available: boolean;
  appeal_deadline: string;
  appeal_authority: string;
}

export interface ContactInformation {
  helpline: string;
  email: string;
  ward_officer: string;
}

export interface ExtractedData {
  document_identity: DocumentIdentity;
  monetary_elements: MonetaryElements;
  procedural_requirements: ProceduralRequirements;
  legal_consequences: LegalConsequences;
  contact_information: ContactInformation;
  simplified_summary: string;
  language: string;
}

export interface SceneStep {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  type: 'start' | 'document' | 'office' | 'payment' | 'success';
  status: 'pending' | 'current' | 'completed';
}

export interface SceneData {
  steps: SceneStep[];
  narrative: string;
}
