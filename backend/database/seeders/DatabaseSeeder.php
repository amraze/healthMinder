<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Blog;
use App\Models\Calendar;
use App\Models\Doctor;
use App\Models\Faq;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        Blog::factory(10)->create();
        Doctor::factory(6)->create();
        Faq::factory(12)->create();
        Calendar::factory(12)->create();
    }
}
