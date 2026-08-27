<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['slug', 'title', 'content'])]
class Page extends Model
{
    use HasFactory;

    protected $casts = [
        'content' => 'array',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
