<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Translation Request</title>
</head>
<body>
    <h2>New Submission Received</h2>
    <p><strong>Name:</strong> {{ $submission->name }}</p>
    <p><strong>Email:</strong> {{ $submission->email }}</p>
    <p><strong>Phone:</strong> {{ $submission->phone_number }}</p>
    <p><strong>Target Language:</strong> {{ $submission->target_language }}</p>
    <p><strong>Notes:</strong> {{ $submission->notes ?? '-' }}</p>

    <p>The submitted document is attached to this email.</p>
</body>
</html>
