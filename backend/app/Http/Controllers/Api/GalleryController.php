<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * GET /api/gallery — public.
     */
    public function index()
    {
        return GalleryImage::orderBy('sort_order')->get();
    }

    /**
     * GET /api/gallery/{gallery} — public.
     */
    public function show(GalleryImage $gallery)
    {
        return $gallery;
    }

    /**
     * POST /api/admin/gallery — protected.
     */
    public function store(Request $request)
    {
        $validated = $this->validated($request);

        return GalleryImage::create($validated);
    }

    /**
     * PUT /api/admin/gallery/{gallery} — protected.
     */
    public function update(Request $request, GalleryImage $gallery)
    {
        $gallery->update($this->validated($request, $gallery));

        return $gallery;
    }

    /**
     * DELETE /api/admin/gallery/{gallery} — protected.
     */
    public function destroy(GalleryImage $gallery)
    {
        $gallery->delete();

        return response()->noContent();
    }

    private function validated(Request $request, ?GalleryImage $gallery = null): array
    {
        return $request->validate([
            'title' => 'nullable|string|max:255',
            'image_url' => $gallery ? 'sometimes|url|max:2048' : 'required|url|max:2048',
            'alt_text' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
        ]);
    }
}
