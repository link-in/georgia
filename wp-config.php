<?php
define('WP_AUTO_UPDATE_CORE', false);// This setting was defined by WordPress Toolkit to prevent WordPress auto-updates. Do not change it to avoid conflicts with the WordPress Toolkit auto-updates feature.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'georgia_DB');

/** MySQL database username */
define('DB_USER', 'georgia_USER');

/** MySQL database password */
define('DB_PASSWORD', '!georgia$');

/** MySQL hostname */
define('DB_HOST', 'localhost:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 's;:6&Fk|!;O744Pd75y(f75r*qA7l386EvK9#e+g;!Gq1[3eT60mv5_(0a2sfg+0');
define('SECURE_AUTH_KEY', '&b87|;r)Y5iH#Q#2B(NB346E_Zaokih)A_%c75n(I:b2u/_W|B!4+p4ZBV-hVs91');
define('LOGGED_IN_KEY', 'oGhy43S&V_7i_k31|0dV9+RJmPq89K@K242ip~)!++38tMN0(+332rbel]3q#vs]');
define('NONCE_KEY', '5gs|]Hc8L71%]3E:52297!qER|L9~229%4(7whvOb]9|OL&9)#]3n4!h#669AS+M');
define('AUTH_SALT', '84dk:LcSC83ciVxvyY9&[!p0A2oiFAX@2#C|~Zh~hx_1%X-Z[a-;)(I-8GTa7f[#');
define('SECURE_AUTH_SALT', 'D8nM~0hchZP7v|iB5PK*B8yT2D23F@+35I~rc-q[L|97b4/]c43[t;b8+]+o9V/0');
define('LOGGED_IN_SALT', 'nFX7qJ8f1C/e05uOH%;7PQw+:I(O3OR]LnYAa822;j)4Nu[I+Po2|rZkexBJz2@m');
define('NONCE_SALT', 'x07*Og1*su/o)TCoG1RZ[3~n@q_:!)BHH3jsxct@1adp[6jb%#@4]%9-E+T_sSy4');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'Iq9Ki_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
