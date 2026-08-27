<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * GET /api/pages/{page:slug} — public.
     */
    public function show(Page $page)
    {
        return $page;
    }

    /**
     * PUT /api/admin/pages/{page:slug} — protected.
     */
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|array',
        ]);

        $page->update($validated);

        return $page;
    }
}
