<?php
/**
 * Plugin Name: WPLoyalty - WooCommerce Loyalty Points, Rewards and Referral
 * Plugin URI: https://www.wployalty.net
 * Description: Loyalty Rules and Referrals for WooCommerce. Turn your hard-earned sales into repeat purchases by rewarding your customers and building loyalty.
 * Version: 1.2.4
 * Author: Wployalty
 * Slug: wp-loyalty-rules
 * Text Domain: wp-loyalty-rules
 * Domain Path: /i18n/languages/
 * Requires at least: 4.9.0
 * WC requires at least: 6.5
 * WC tested up to: 7.9
 * Contributors: Wployalty, Alagesan
 * Author URI: https://wployalty.net/
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') or die;
//Define the plugin version
defined('WLR_PLUGIN_VERSION') or define('WLR_PLUGIN_VERSION', '1.2.4');
//Define the plugin env
defined('WLR_PLUGIN_ENV') or define('WLR_PLUGIN_ENV', 'production');
// Define the plugin text domain
defined('WLR_TEXT_DOMAIN') or define('WLR_TEXT_DOMAIN', 'wp-loyalty-rules');
// Define the slug
defined('WLR_PLUGIN_SLUG') or define('WLR_PLUGIN_SLUG', 'wp-loyalty-rules');
// Define plugin path
defined('WLR_PLUGIN_PATH') or define('WLR_PLUGIN_PATH', str_replace('\\', '/', __DIR__) . '/');
// Define plugin URL
defined('WLR_PLUGIN_URL') or define('WLR_PLUGIN_URL', plugin_dir_url(__FILE__));
// Define plugin file
defined('WLR_PLUGIN_FILE') or define('WLR_PLUGIN_FILE', __FILE__);
// Define plugin prefix
defined('WLR_PLUGIN_PREFIX') or define('WLR_PLUGIN_PREFIX', 'wlr');
//Define the plugin language
defined('WLR_PLUGIN_LANGUAGE') or define('WLR_PLUGIN_LANGUAGE', get_locale());
//defined plugin name
defined('WLR_PLUGIN_NAME') or define('WLR_PLUGIN_NAME', 'WPLoyalty - WooCommerce Loyalty Points, Rewards and Referral');
defined('WLR_MINIMUM_PHP_VERSION') or define('WLR_MINIMUM_PHP_VERSION', '7.0.0');
defined('WLR_MINIMUM_WP_VERSION') or define('WLR_MINIMUM_WP_VERSION', '4.9');
defined('WLR_MINIMUM_WC_VERSION') or define('WLR_MINIMUM_WC_VERSION', '6.5');
// defined edd licensing and updater constants
defined('WLR_LICENSE_STORE_URL') or define('WLR_LICENSE_STORE_URL', 'https://wployalty.net');
defined('WLR_LICENSE_ITEM_ID') or define('WLR_LICENSE_ITEM_ID', 606);
defined('WLR_LICENSE_ITEM_NAME') or define('WLR_LICENSE_ITEM_NAME', 'WooCommerce Loyalty Rules');
defined('WLR_LICENSE_ITEM_URL') or define('WLR_LICENSE_ITEM_URL', 'https://wployalty.net/downloads/wployalty');
if (!function_exists('isWoocommerceActive')) {
    function isWoocommerceActive()
    {
        $active_plugins = apply_filters('active_plugins', get_option('active_plugins', array()));
        if (is_multisite()) {
            $active_plugins = array_merge($active_plugins, get_site_option('active_sitewide_plugins', array()));
        }
        return in_array('woocommerce/woocommerce.php', $active_plugins) || array_key_exists('woocommerce/woocommerce.php', $active_plugins);
    }
}
if (!isWoocommerceActive()) {
    return;
}
add_action('before_woocommerce_init', function () {
    if (class_exists(\Automattic\WooCommerce\Utilities\FeaturesUtil::class)) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
    }
});
// Autoload the vendor
if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    return;
} elseif (!class_exists('Wlr\App\Helpers\CompatibleCheck')) {
    require __DIR__ . '/vendor/autoload.php';
}

if (!class_exists('Wlr\App\Helpers\CompatibleCheck')) {
    return;
}
$activation_check = new \Wlr\App\Helpers\CompatibleCheck();
if (!$activation_check->init_check()) {
    add_action('all_admin_notices', array($activation_check, 'inactiveNotice'));
    return;
}
if (!class_exists('\Wlr\App\Router')) {
    return;
}
if (!function_exists('isWLRExtraPluginData')) {
    function isWLRExtraPluginData($header)
    {
        $header[] = 'WPLoyalty';
        $header[] = 'WPLoyalty Icon';
        $header[] = 'WPLoyalty Document Link';
        $header[] = 'WPLoyalty Page Link';
        return $header;
    }
}
//include_once WLR_PLUGIN_PATH . 'App/Api/LoyaltyRestApi.php';
add_filter('extra_plugin_headers', 'isWLRExtraPluginData');
//Init the router
$plugin_rel_path = 'wp-loyalty-rules/i18n/languages/';
load_plugin_textdomain(WLR_TEXT_DOMAIN, false, $plugin_rel_path);
$router = new \Wlr\App\Router();
$router->init();
if (class_exists('\Wlr\App\Premium\Premium')) {
    $premium = new \Wlr\App\Premium\Premium();
    $premium->init();
}

$wlr_apps_class = array(
    'Launcher' => WLR_PLUGIN_PATH . 'App/Apps/Launcher/wp-loyalty-launcher.php',
    'PointExpiry' => WLR_PLUGIN_PATH . 'App/Apps/PointExpiry/wp-loyalty-point-expire.php',
);
$wlr_apps_class = apply_filters('wlr_app_init_class', $wlr_apps_class);
foreach ($wlr_apps_class as $app_name => $app_path) {
    // $app_path = $path . ucfirst($app_name). '/vendor/autoload.php';
    if (file_exists($app_path)) {
        include $app_path;
        // $app_router = new $app_class();
    }
}
