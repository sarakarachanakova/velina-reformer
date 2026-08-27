<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

/**
 * PLACEHOLDER DATA — none of this copy is final client content. The
 * `content` shape here must stay in sync with what each frontend view
 * expects (see frontend/src/services/placeholderData.js for the fallback
 * used when the API is unreachable).
 */
class PageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [
            [
                'slug' => 'home',
                'title' => 'Велина Реформер',
                'content' => [
                    'heroHeadline' => 'Mind • Body • Balance',
                    'heroSubtext' => 'Уникатно искуство со Реформер Пилатес',
                    'aboutPreview' => 'Велина Реформер е бутиков студио посветено на сила, алигнмент и свесно движење.',
                    'reformerIntro' => 'Реформер Пилатес користи машина со пружини за изградба на сила, флексибилност и контрола со низок импакт на зглобовите.',
                    'ctaText' => 'Подготвени сте да искусите Реформер Пилатес? Контактирајте го нашето студио.',
                ],
            ],
            [
                'slug' => 'about',
                'title' => 'Нашата Приказна',
                'content' => [
                    'story' => 'Our studio story will be provided by the client.',
                    'philosophy' => 'Our philosophy will be provided by the client.',
                    'mission' => 'Our mission will be provided by the client.',
                    'difference' => 'What makes us different will be provided by the client.',
                ],
            ],
            [
                'slug' => 'reformer-pilates',
                'title' => 'Реформер Пилатес',
                'content' => [
                    'whatIsIt' => 'Реформер Пилатес е метод на вежбање со низок импакт, изведуван на специјализирана машина со пружини.',
                    'benefits' => 'Предностите можат да вклучуваат подобрена сила на јадрото, држење, флексибилност и свест за телото.',
                    'suitableFor' => 'Соодветно за широк спектар на нивоа на фитнес; консултирајте се со студиото за насоки.',
                    'typicalSession' => 'Типична сесија ја води инструктор и трае околу 50 минути.',
                ],
            ],
            [
                'slug' => 'contact',
                'title' => 'Контакт',
                'content' => [
                    'phone' => '+389 77 503 524',
                    'email' => 'info@velinareformer.mk',
                    'address' => 'Струмица, Северна Македонија',
                    'instagram' => 'https://www.instagram.com/velinareformer?igsi=Mmx6Y3o0amo4cDZr',
                    'facebook' => 'https://www.facebook.com/profile.php?id=61582159225800',
                    'tiktok' => 'https://www.tiktok.com/@velinareformer',
                    'mapEmbedUrl' => '',
                ],
            ],
        ];

        foreach ($pages as $page) {
            Page::updateOrCreate(['slug' => $page['slug']], $page);
        }
    }
}
