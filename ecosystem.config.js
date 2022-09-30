module.exports = {
  
    "apps":[
        {
            "name": "daviesite", 
            "script": "index.js", 
            "env": {
                "COMMON_VARIABLE": "true"
            },
            "env_production": {
                "NODE_ENV": "production" 
            }
        }
    ],
    "deploy": {
        "production": {
            "user":"root",
            "host": ["152.136.192.58"],
            "port": "22",
            "ref": "origin/master",
            "repo": "git@gitlab.wangxiao.cn:gaoyanpeng/node-pm2-test.git",
            "path": "/",
            "ssh_options": "StrictHostKeyChecking=no",
            // "pre-setup": "echo 'This is a pre-setup command'",
            // "post-setup": "ls -la",
            "pre-deploy-local": "echo 'This is a pre-deploy-local command'",
            "post-deploy" : "pm2 reload ecosystem.config.js --env production"
        }
    }

};
