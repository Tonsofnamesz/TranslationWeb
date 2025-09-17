<?php

namespace App\Http\Controllers;

use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class SubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'target_language' => 'required',
            'file' => 'required|file|mimes:pdf,doc,docx',
        ]);

        // Store file
        $filePath = $request->file('file')->store('submissions', 'public');

        // Save to DB
        $submission = Submission::create([
            'name' => $request->name,
            'email' => $request->email,
            'target_language' => $request->target_language,
            'notes' => $request->notes,
            'file_path' => $filePath,
        ]);

        // Send email to translator (dummy example)
        Mail::raw("New submission received from {$submission->name}.", function ($message) use ($submission) {
            $message->to('translator@example.com')
                    ->subject('New Translation Request');
        });

        return response()->json(['message' => 'Submission received!', 'data' => $submission], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
