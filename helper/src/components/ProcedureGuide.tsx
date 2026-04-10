import React from 'react';
import { ExtractedData } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileText, Calendar, MapPin, AlertTriangle, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const ProcedureGuide: React.FC<{ data: ExtractedData }> = ({ data }) => {
  return (
    <div className="space-y-6">
      <Card className="border-blue-100 bg-blue-50/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <CheckCircle2 className="w-5 h-5" />
            Simplified Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            {data.simplified_summary}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-500" />
              Document Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Authority</span>
              <span className="font-medium">{data.document_identity.issuing_authority}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Department</span>
              <span className="font-medium">{data.document_identity.department}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Reference #</span>
              <span className="font-mono">{data.document_identity.reference_number}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Amount Due</span>
              <span className="font-bold text-lg text-blue-600">
                {data.monetary_elements.currency} {data.monetary_elements.amount_demand.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-500" />
              Deadlines & Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Payment Deadline</span>
              <Badge variant="destructive">{data.monetary_elements.payment_deadline}</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Visit Required</span>
              <Badge variant={data.procedural_requirements.physical_visit_required ? "default" : "secondary"}>
                {data.procedural_requirements.physical_visit_required ? "Yes" : "No"}
              </Badge>
            </div>
            <div className="flex items-start justify-between text-sm gap-4">
              <span className="text-slate-500 shrink-0">Location</span>
              <span className="font-medium text-right flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {data.procedural_requirements.visit_location}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-amber-100 bg-amber-50/30">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2 text-amber-800">
              <AlertTriangle className="w-4 h-4" />
              Legal Consequences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-900 leading-relaxed">
              {data.legal_consequences.non_payment_penalty}
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Required Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.procedural_requirements.mandatory_documents.map((doc, i) => (
                <Badge key={i} variant="outline" className="bg-white px-3 py-1">
                  {doc}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>{data.contact_information.helpline}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="truncate">{data.contact_information.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>{data.contact_information.ward_officer}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
