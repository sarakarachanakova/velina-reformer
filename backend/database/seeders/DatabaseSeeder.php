<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Placeholder admin account for future Admin/CMS development.
        // Not used by the public website.
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@velinareformer.mk',
            'role' => 'admin',
        ]);

        $this->call([
            PageSeeder::class,
            InstructorSeeder::class,
            GallerySeeder::class,
        ]);
    }
}
