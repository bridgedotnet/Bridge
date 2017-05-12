module.exports = function(grunt) {
    var browsers = [
    {
        browserName: "firefox",
        version: "52",
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

    // https://wiki.saucelabs.com/display/DOCS/Grunt-Saucelabs+Set+Up%2C+Configuration%2C+and+Usage
    // https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+JavaScript+Unit+Testing+Example
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                // https://wiki.saucelabs.com/display/DOCS/Parameters+for+Grunt-Saucelabs+Tasks
                options: {
                    urls: ["http://127.0.0.1:9999/index.html?noglobals&hidepassed"],
                    browsers: browsers,
                    build: process.env.TRAVIS_JOB_ID,
                    testname: "Bridge.NET client tests",
                    throttled: 4,
                    sauceConfig: {
                        // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
                        'video-upload-on-pass': false
                    },
                    tags: [process.TRAVIS_BRANCH, process.TRAVIS_BUILD_NUMBER, process.TRAVIS_COMMIT_RANGE ]
                }
            }
        },
        watch: {}
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
    }

    // https://gruntjs.com/api/grunt.task
    grunt.registerTask("dev", ["connect", "watch"]);
    grunt.registerTask("test", ["connect", "saucelabs-qunit"]);
};