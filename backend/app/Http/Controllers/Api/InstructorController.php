<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Instructor;
use Illuminate\Http\Request;

class InstructorController extends Controller
{
    /**
     * GET /api/instructors — public.
     */
    public function index()
    {
        return Instructor::orderBy('sort_order')->get();
    }

    /**
     * GET /api/instructors/{instructor} — public.
     */
    public function show(Instructor $instructor)
    {
        return $instructor;
    }

    /**
     * POST /api/admin/instructors — protected.
     */
    public function store(Request $request)
    {
        $validated = $this->validated($request);

        return Instructor::create($validated);
    }

    /**
     * PUT /api/admin/instructors/{instructor} — protected.
     */
    public function update(Request $request, Instructor $instructor)
    {
        $instructor->update($this->validated($request, $instructor));

        return $instructor;
    }

    /**
     * DELETE /api/admin/instructors/{instructor} — protected.
     */
    public function destroy(Instructor $instructor)
    {
        $instructor->delete();

        return response()->noContent();
    }

    private function validated(Request $request, ?Instructor $instructor = null): array
    {
        return $request->validate([
            'name' => $instructor ? 'sometimes|string|max:255' : 'required|string|max:255',
            'role' => $instructor ? 'sometimes|string|max:255' : 'required|string|max:255',
            'bio' => 'nullable|string',
            'image_url' => 'nullable|url|max:2048',
            'sort_order' => 'nullable|integer|min:0',
        ]);
    }
}
