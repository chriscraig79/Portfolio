---
layout: project
title: Confidential Whistleblowing Reporting System Research & Design
date: 2024-12-15
description: User research and concept validation for a secure, anonymous reporting system that protects whistleblowers while enabling organisations to investigate compliance issues effectively.
image: /assets/images/project-hero.jpg
image_alt: Confidential reporting system interface mockup
---

Through customer interviews and workshops, I gathered direct insights from users, uncovering the key challenges faced by whistleblowers and the organisations managing their reports.

## Whistleblower Challenges
Whistleblowers often fear retaliation or exposure, which discourages them from reporting issues. They also experience frustration due to a lack of updates or the inability to provide further details and remain anonymous, making the process feel ineffective. Additionally, they are concerned about the security of their reports and personal information. Language barriers and accessibility challenges further hinder their ability to report concerns.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/6Qh7k4NUDorMZT.png" alt="Whistleblower user journey mapping challenges and oppartunities " caption="Whistleblower challenges and oppartunities user journey map" %}

## Organisational Challenges
Organisations, on the other hand, struggle to act on suspected wrongdoing when they lack sufficient evidence or cannot contact whistleblowers for clarification. They face pressure to meet regulatory and industry compliance standards to avoid penalties and require a scalable whistleblowing mechanism to grow with the organisation. Managing whistleblowing reports is often complex and time-consuming, leading to delays in addressing issues. Moreover, limited information restricts their ability to proactively manage risks.

## Concept Validation
Building on our research, I produced a high-level sequences diagram to validate the initial concept for a confidential reporting system acting as a proxy between the Whistleblower and the application. The flow outlines how reports submitted by whistleblowers are handled securely and anonymously by various users through the process.

{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/7LPhbuiT6WXdU5.png" alt="Confidential reporting system process flow" caption="High-level process flow for the confidential reporting system concept" %}

## UX Concept
The concept outlines a secure and user-friendly process for whistleblowers to report concerns while maintaining their anonymity. The flow is designed to reduce barriers to reporting, ensuring users feel safe and supported throughout, ensuring the key needs we're addressed, such as maintaining anonymity, enabling secure communication, and supporting efficient triage and investigation workflows. 

### 1. Landing Page
The landing page introduces the confidential reporting system, emphasising trust, anonymity, and security. It provides an overview of the service's key features, such as encrypted communication and two-way messaging, to reassure users. A prominent "Start Reporting" button encourages users to begin their report, while an option to log in with a reference number and passcode allows returning users to check for updates.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/32jQ1yfkXQFtxk.png" alt="Landing page introducing the confidential reporting system" caption="Landing page introducing the confidential reporting system" %}

### 2. Submission Form
In this step, users provide information about their concern. The form captures key details such as the topic and a description of the issue while being mindful not to overwhelm or discourage users. By removing as many hurdles as possible, the process balances ease of reporting with collecting essential information. Users are also reminded of their option to remain anonymous, with clear instructions emphasising the secure and confidential nature of the system.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/66XRs5k3YtCoJr.png" alt="User-friendly submission form for reporting concerns" caption="User-friendly submission form for reporting concerns" %}

### 3. Submission Preview
Before finalising their report, users are presented with a preview of the information they have provided. This review step allows them to ensure accuracy and completeness, mirroring patterns used in other important online submissions, such as financial transactions. Users can make edits if needed or proceed confidently by clicking "Submit."
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/C7uAYiBiUeUwMP.png" alt="Preview step allowing users to review their submission" caption="Preview step allowing users to review their submission" %}

### 4. Submission Confirmation
After submitting their report, users are shown a confirmation page that acknowledges receipt. This page thanks the user for their submission and provides a unique reference number and passcode, enabling them to log in later for updates or to respond to follow-up requests. The message reinforces the security and anonymity of the process.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/2eNDVRjhweoS6s.png" alt="Confirmation page with unique reference number and passcode" caption="Confirmation page with unique reference number and passcode" %}

### 5. Optional Contact Details
After submission, users are given the option to provide contact details to receive notifications about updates on their report. This approach ensures that the user has already committed to reporting and feels confident in the system before being asked to share contact details. Importantly, users remain anonymous to the organisation, addressing a key barrier that discourages many whistleblowers from coming forward.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/4UiFyND3uPYBYw.png" alt="Optional step for providing contact information" caption="Optional step for providing contact information" %}

### 6. Two-Way Communication
The system facilitates secure, ongoing dialogue between the whistleblower and the investigating organisation. If contact details were provided, the platform notifies users when new messages are available, keeping the process efficient while maintaining confidentiality.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/BgQaKvfHuSYq1h.png" alt="Secure login using report credentials" caption="Secure login using report credentials" %}

### 7. Login with Case Credentials
Logging in with the report credentials provide on the confirmation page, retrieves the report details. There is also an option to reset the passcode if contact details were provided.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/2JPGzgWZdNKDuV.png" alt="Secure login using report credentials" caption="Secure login using report credentials" %}

### 8. Report Summary
Based on research, we established a working assumption that most reporters would only ever report a single or very few issues. Therefore, we don't envisage the need to list any other reports. This simplifies the UX for the majority of users and reduces the overall development effort. If a reporter does report multiple issues, they would have a set of credentials for each report.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/Epo9H8WjGvFce6.png" alt="Activity history showing message exchanges and report status" caption="Activity history showing message exchanges and report status" %}

### 9. Report Updates
If further information is request, this step allows reporters to upload supplementary evidence or provide additional details. The interface is designed to make it easy to share more documents or elaborate on earlier messages while inforcing the security measures protecting their identity.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/5KYN3tojA2HLVA.png" alt="Secure messaging interface for ongoing dialogue" caption="Secure messaging interface for ongoing dialogue" %}

### 10. Report Activity
Once a message it sent, it will appear in the activity history. Status or other changes to the report could be displayed here also, some of which may not require a notification to be sent to the reporter.
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/7tvyJJcpnXHyUG.png" alt="Interface for providing additional information and evidence" caption="Interface for providing additional information and evidence" %}

### Mobile Interface Examples
{% include image.html src="https://whimuc.com/X4BJtkAZcZbFcHMKRvyuQL/13LsUK5GEVrxko.png" alt="Additional mobile interface example" caption="Additional mobile interface examples" %}

---

This research provided the foundation for developing a whistleblowing system that protects vulnerable reporters while enabling effective organisational compliance and investigation processes.