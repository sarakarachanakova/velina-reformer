<?php

namespace Database\Seeders;

use App\Models\Instructor;
use Illuminate\Database\Seeder;

/**
 * PLACEHOLDER DATA — names, roles, and bios are not real. They exist so the
 * public pages have something to render during local development, and will
 * be replaced with real content once the client provides it (either
 * directly in the DB or, later, through the Admin panel).
 */
class InstructorSeeder extends Seeder
{
    public function run(): void
    {
        $instructors = [
            [
                'name' => 'Данела Велинска',
                'role' => 'Lead Instructor',
                // 'bio' => 'Bio to be provided by the client.',
                'image_url' => null,
                'sort_order' => 1,
            ],
            [
                'name' => 'Ѓорги Танушев',
                'role' => 'Reformer Instructor',
                // 'bio' => 'Bio to be provided by the client.',
                'image_url' => null,
                'sort_order' => 2,
            ],
        ];

        foreach ($instructors as $instructor) {
            Instructor::updateOrCreate(
                ['name' => $instructor['name'], 'sort_order' => $instructor['sort_order']],
                $instructor
            );
        }
    }
}
