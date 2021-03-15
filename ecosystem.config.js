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
      user: 'root',
      host: '192.168.148.129',
      ref: 'origin/master',
      repo: 'git@github.com:weishunjie-github/server-blog.git',
      path: '/usr/local/myProject',
      ssh_options: "StrictHostKeyChecking=no",
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'env': {
        'NODE_ENV': 'production'
      },
    }
  }
};
