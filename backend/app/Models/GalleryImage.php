<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['title', 'image_url', 'alt_text', 'sort_order'])]
class GalleryImage extends Model
{
    use HasFactory;

    /**
     * Table is named `gallery` per the project brief.
     */
    protected $table = 'gallery';
}
