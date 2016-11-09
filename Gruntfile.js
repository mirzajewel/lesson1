module.exports = function(grunt){

    // Load Concat Task for NodeModules
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat:{
            vendor: {
                src:['bower_components/bootstrap/dist/css/bootstrap.css','bower_components/bootstrap/dist/css/bootstrap-theme.css'],
                dest: 'app/assets/css/vendor.css'
            }
        }
    });

};