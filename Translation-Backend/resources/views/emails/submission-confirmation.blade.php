<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Submission Received</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <p>Dear {{ $submission->name }},</p>

    <p>
        Thank you for contacting <strong>Sophie Guérande</strong>.
        Your translation request has been successfully received.
    </p>

    <p>
        I will review your document and get back to you as soon as possible.
    </p>

    <p>
        <strong>Summary of your submission:</strong><br>
        Email: {{ $submission->email }}<br>
        Phone: {{ $submission->phone_number }}
    </p>

    <p>
        Kind regards,<br>
        <strong>Sophie Guérande</strong><br>
        Sworn Translator
    </p>
</body>
</html>
