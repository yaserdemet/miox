export interface ProcessDetail {
  title: string;
  status: string;
  pickupLocation?: string;
  towingDate?: string;
  dateTime?: string;
  reportType?: string;
  reasonForDamage?: string;
  reportingParty?: string;
  contact?: string;
  expertAssignmentDate?: string;
  expertInfo?: string;
  vehicleDuration?: string;
  vehicleModel?: string;
  extraDuration?: string;
  reviewReferralDate?: string;
  reviewCompletionDate?: string;
  actionRequired?: string;
  occupationalDeduction?: string;
  appreciationDeduction?: string;
  policyDeductible?: string;
  nonDamageAmount?: string;
  paidTo?: string;
  iban?: string;
  paymentAmount?: string;
  note?: string;
  completionDate?: string;
}

export interface DamageProcess {
  title: string;
  fileNo: string;
  estimatedRemainingTime: string;
  currentStatus: string;
  processDetails: ProcessDetail[];
}
