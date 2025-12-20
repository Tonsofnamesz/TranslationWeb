<?php

namespace App\Http\Controllers;


use App\Models\Submission;
use App\Mail\SubmissionReceived;
use App\Mail\SubmissionConfirmation;
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
            'email' => 'required|email:rfc,dns',
            'phone_number' => 'required|string|max:20',
            'file' => 'required|file|mimes:pdf,doc,docx',
        ]);

        $filePath = $request->file('file')->store('submissions', 'public');

        $submission = Submission::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'notes' => $request->notes,
            'file_path' => $filePath,
        ]);

        Mail::to('sguerande@yahoo.fr')
        ->cc('jonathanryan2015@gmail.com')
        ->send(new SubmissionReceived($submission));
        
        // Auto-reply to user
        Mail::to($submission->email)
        ->send(new SubmissionConfirmation($submission));

        return response()->json([
            'message' => 'Submission sent to translator!',
            'data' => $submission
        ], 201);
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
