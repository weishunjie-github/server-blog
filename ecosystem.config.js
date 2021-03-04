module.exports = {
  apps: [{
    name: 'app',
    script: './bin/www',
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ["node_moudle", "logs"],
    "error_file": "./logs/app-err.log",
    "out_file": "./logs/app-out.log",
    "log_date_format": "YYYY-MM-DD HH:mm:ss",
    max_memory_restart: '1G',

    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      EODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
