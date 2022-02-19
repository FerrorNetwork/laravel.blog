const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.styles([
    'resources/assets/admin/plugins/fontawesome-free/css/all.min.css',
    'resources/assets/admin/css/adminlte.min.css'
], 'public/assets/admin/plugins/css/admin.css');

mix.scripts([
    'resources/assets/admin/plugins/jquery/jquery.min.js',
    'resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'resources/assets/admin/js/adminlte.min.js',
    'resources/assets/admin/js/demo.js'
], 'public/assets/admin/plugins/js/admin.js');

mix.copyDirectory('resources/assets/admin/plugins/fontawesome-free/webfonts', 'public/assets/admin/plugins/webfonts');
mix.copyDirectory('resources/assets/admin/img', 'public/assets/admin/img');

mix.copy('resources/assets/admin/css/adminlte.min.css.map', 'public/assets/admin/plugins/css/adminlte.min.css.map')
mix.copy('resources/assets/admin/js/adminlte.min.js.map', 'public/assets/admin/plugins/js/adminlte.min.js.map')
