<?php

namespace App\Console\Commands;

use App\Models\GalleryImage;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class SyncGalleryImages extends Command
{
    protected $signature = 'gallery:sync';

    protected $description = 'Sync images from frontend/public/gallery into the gallery database';

    public function handle(): int
    {
        $directory = base_path('../frontend/public/gallery');

        if (! File::isDirectory($directory)) {
            $this->error("Gallery directory not found: {$directory}");

            return self::FAILURE;
        }

        $images = collect(File::files($directory))
            ->filter(fn ($file) => in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'webp', 'avif'], true))
            ->sortBy(fn ($file) => $file->getFilename(), SORT_NATURAL | SORT_FLAG_CASE)
            ->values();

        foreach ($images as $index => $file) {
            $filename = $file->getFilename();
            $title = Str::headline(pathinfo($filename, PATHINFO_FILENAME));

            GalleryImage::updateOrCreate(
                ['sort_order' => $index + 1],
                [
                    'title' => $title,
                    'image_url' => '/gallery/'.rawurlencode($filename),
                    'alt_text' => "Velina Reformer — {$title}",
                    'sort_order' => $index + 1,
                ],
            );
        }

        $this->info("Synced {$images->count()} gallery images.");

        return self::SUCCESS;
    }
}
