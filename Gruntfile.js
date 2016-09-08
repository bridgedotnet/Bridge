module.exports = function(grunt) {
    var browsers = [
    {
        browserName: "firefox",
        version: "43",
        platform: "WIN8"
    }
    , {
        browserName: "googlechrome",
        platform: "XP"
    }
    , {
        browserName: "googlechrome",
        platform: "Windows 10"
    }
    , {
        browserName: "googlechrome",
        platform: "linux"
    } 
    //, {
        // browserName: "iphone",
        // platform: 'Mac 10.10',
        // version: '9.2'
    // }
    // ,{
        // browserName: "microsoftedge",
        // platform: "Windows 10"
    // }
    // , {
        // browserName: "android",
        // platform: "android",
        // version: "5.0"
    // }
    // , {
        // browserName: "internet explorer",
        // platform: "WIN8",
        // version: "10"
    // }
    ];

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        'saucelabs-qunit': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/Tests/Runner/index.html"],
                    tunnelTimeout: 5,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "Bridge client tests",
                    tags: ["master", process.TRAVIS_BRANCH, process.TRAVIS_BUILD_NUMBER, process.TRAVIS_COMMIT_RANGE ]
                }
            }
        },
        watch: {}
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
    }

    grunt.registerTask("dev", ["connect", "watch"]);
    grunt.registerTask("test", ["connect", "saucelabs-qunit"]);
};