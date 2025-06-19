<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'date',
        'location',
        'status',
        'user_id',
    ];

    // Optional: define relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
