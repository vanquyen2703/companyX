<?php
/**
 * VanQuyen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage VanQuyen Theme
 * @since VanQuyen Theme 1.0
 */


// define
define('VQ_DIR_ASSETS', get_stylesheet_directory_uri() . '/assets');


add_action( 'wp_enqueue_scripts', 'vanquyen_enqueue_styles' );
function vanquyen_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style')
    );

	// vanquyen icon
    wp_enqueue_style(
        'vanquyen-icon',
        VQ_DIR_ASSETS . '/css/vanquyen-icon.min.css', array(),wp_get_theme()->get('Version')
    );


}

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';
