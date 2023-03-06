<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'companyX' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^7diF,)0m51)I-{:;Yq5j=w}V0x`yp&%ws}FtIWB]qntJSeL/|j0E%@s+54[=k4:' );
define( 'SECURE_AUTH_KEY',  'wZSH$sNFa4JHGD-1H-rxKm5w?[i=MEO!>In1^6i(;x7zEaxxS%]Euxm %D>AXE=Y' );
define( 'LOGGED_IN_KEY',    'Qdjwck6%w8<P{U.xEW Y+[5o/k]~({w6eb;d_4us)tXJ++]2Yx5]p`:6{T+K}lQ*' );
define( 'NONCE_KEY',        'D0V? Q}w`edDDvt-7*dE3q0.M,hJ`$A?xy_]7d(<<R<OsS~A,5kYXvKFG|X T1Mq' );
define( 'AUTH_SALT',        'k)!06D/hss:>F-A{Lzb`whE]^^KC+zz*,apkRoP]d2_{V^NMY(W.[ z,hyzw&P K' );
define( 'SECURE_AUTH_SALT', 's+_F%SY`%CxJolFx6qcpn.GTH*&7;c)^7=zk:7-Aw5yAw1HhpZh~k(:%jyJ(EtDE' );
define( 'LOGGED_IN_SALT',   '0GWUC(q_roXQykkGI@qHi-8^kq`QA^FiYm!Ss]<s3$%A4bH2|YahJHX-76MSNg*D' );
define( 'NONCE_SALT',       'TOe`yGob|s|7zv/Kc2c,REdI}Sya|lo-z;=KXe&rv7*I.zN_Mc>o6j!AA7}*kV1h' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
