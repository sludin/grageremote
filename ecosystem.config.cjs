module.exports = {
    apps : [{
	script: 'src/server.js',
	name: 'smartthings',
	watch: './src',
	out_file: './logs/out.log',
	error_file: './logs/error.log',
	merge_logs: true
	
    }],

};
