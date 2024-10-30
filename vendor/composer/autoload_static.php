<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9da7fca8115459de93bb2fb69f5f914e
{
    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'Hizzle\\Forms\\' => 13,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Hizzle\\Forms\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
            1 => __DIR__ . '/../..' . '/pro',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Hizzle\\Forms\\Admin\\Admin' => __DIR__ . '/../..' . '/src/admin/class-admin.php',
        'Hizzle\\Forms\\Email' => __DIR__ . '/../..' . '/src/Email.php',
        'Hizzle\\Forms\\Field' => __DIR__ . '/../..' . '/src/Field.php',
        'Hizzle\\Forms\\Form' => __DIR__ . '/../..' . '/src/Form.php',
        'Hizzle\\Forms\\Merge_Tags' => __DIR__ . '/../..' . '/src/Merge_Tags.php',
        'Hizzle\\Forms\\Plugin' => __DIR__ . '/../..' . '/src/Plugin.php',
        'Hizzle\\Forms\\Pro\\Admin\\Pro_Admin' => __DIR__ . '/../..' . '/pro/src/admin/class-admin.php',
        'Hizzle\\Forms\\Pro\\Entries' => __DIR__ . '/../..' . '/pro/src/class-entries.php',
        'Hizzle\\Forms\\Pro\\Hizzle_Forms_pro' => __DIR__ . '/../..' . '/pro/hizzle-forms-pro.php',
        'Hizzle\\Forms\\REST_API' => __DIR__ . '/../..' . '/src/REST_API.php',
        'Hizzle\\Forms\\Spam_Checker' => __DIR__ . '/../..' . '/src/Spam_Checker.php',
        'Hizzle\\Forms\\Submission' => __DIR__ . '/../..' . '/src/Submission.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9da7fca8115459de93bb2fb69f5f914e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9da7fca8115459de93bb2fb69f5f914e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9da7fca8115459de93bb2fb69f5f914e::$classMap;

        }, null, ClassLoader::class);
    }
}