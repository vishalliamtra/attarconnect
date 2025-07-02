"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: January 15, 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Introduction */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At AttarConnect, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              and use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-5 h-5 text-amber-600 mr-2" />
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 mb-3">We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Account credentials and preferences</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Artisan Information</h3>
                <p className="text-gray-700 mb-3">For artisan accounts, we additionally collect:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Workshop location and business details</li>
                  <li>Product information and images</li>
                  <li>Banking information for payments</li>
                  <li>Verification documents</li>
                  <li>Professional certifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-3">We automatically collect certain information when you use our services:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 text-amber-600 mr-2" />
              How We Use Your Information
            </h2>
            
            <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Personalizing your shopping experience</li>
              <li>Sending order confirmations and shipping updates</li>
              <li>Marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
              <li>Facilitating communication between customers and artisans</li>
              <li>Processing payments and managing accounts</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-5 h-5 text-amber-600 mr-2" />
              Information Sharing and Disclosure
            </h2>
            
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">With Artisans</h3>
                <p className="text-gray-700">
                  We share necessary order information with artisans to fulfill your purchases, including your name, 
                  shipping address, and order details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
                <p className="text-gray-700">
                  We work with trusted third-party service providers who assist us in operating our website, 
                  processing payments, shipping orders, and providing customer support.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                <p className="text-gray-700">
                  We may disclose your information if required by law, court order, or government regulation, 
                  or to protect our rights, property, or safety.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Transfers</h3>
                <p className="text-gray-700">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  as part of the business transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through certified providers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and employee training</li>
              <li>Data backup and recovery procedures</li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can control cookie settings through your browser preferences.
            </p>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                <p className="text-gray-700">Required for basic site functionality and security.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                <p className="text-gray-700">Used to deliver relevant advertisements and track campaign effectiveness.</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to processing of your personal information for marketing purposes</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, 
              we will securely delete or anonymize it.
            </p>
          </div>

          {/* International Transfers */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure that such transfers are conducted in accordance with applicable data protection laws and that 
              appropriate safeguards are in place to protect your information.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information 
              from children under 13. If we become aware that we have collected personal information from a child under 13, 
              we will take steps to delete such information promptly.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the updated policy on our website and updating the 
              "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-amber-600 mr-3" />
                <span className="text-gray-700">privacy@attarconnect.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-amber-600 mr-3" />
                <span className="text-gray-700">+91 12345 67890</span>
              </div>
              <div className="flex items-start">
                <Users className="w-4 h-4 text-amber-600 mr-3 mt-1" />
                <div className="text-gray-700">
                  <p>AttarConnect Privacy Team</p>
                  <p>Kannauj, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;