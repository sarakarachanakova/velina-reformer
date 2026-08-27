<?php

namespace Database\Seeders;

use App\Models\GalleryImage;
use Illuminate\Database\Seeder;

/**
 * PLACEHOLDER DATA — no real studio photography yet. `image_url` is left
 * null; the frontend renders a labeled placeholder block when it is empty.
 */
class GallerySeeder extends Seeder
{
    public function run(): void
    {
        $images = [
            ['title' => 'Studio', 'alt_text' => 'Studio image', 'sort_order' => 1],
            ['title' => 'Reformer beds', 'alt_text' => 'Reformer beds image', 'sort_order' => 2],
            ['title' => 'Session', 'alt_text' => 'Session image', 'sort_order' => 3],
        ];

        foreach ($images as $image) {
            GalleryImage::updateOrCreate(
                ['sort_order' => $image['sort_order']],
                $image + ['image_url' => null]
            );
        }
    }
}
