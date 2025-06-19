<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'date'        => 'required|date|after_or_equal:today',
            'location'    => 'required|string|max:255',
            'status'      => 'required|in:upcoming,ongoing,completed',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required'  => 'The event title is required.',
            'date.required'   => 'Please provide the event date.',
            'date.after_or_equal' => 'Event date must be today or later.',
            'location.required' => 'The event location is required.',
            'status.in'       => 'Status must be one of: upcoming, ongoing, or completed.',
        ];
    }
}
