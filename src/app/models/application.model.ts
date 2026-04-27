export type ApplicationStatus = 'Draft' | 'Submitted' | 'Approved' | 'Rejected';

export interface Application {
  id: string;
  petId: string;
  applicantName: string;
  email: string;
  phone: string;
  message: string;
  status: ApplicationStatus;
  createdAt: string;
}
